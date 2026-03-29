const ALLOWED_ORIGIN = 'jaxple.dev';
const GITHUB_PAGES_ORIGIN = 'https://jaxple.github.io';
const PROTECTED_EXTENSIONS = ['.js', '.css', '.json', '.map', '.wasm', '.yaml', '.yml'];
const SENSITIVE_HEADERS = [
  'server',
  'x-github-request-id',
  'x-github-project',
  'x-powered-by',
  'via',
  'x-cache',
  'x-served-by',
  'x-timer',
  'x-fastly-request-id',
  'cf-ray',
  'cf-request-id'
];
const BOT_USER_AGENTS = [
  'curl', 'wget', 'python', 'go-http-client', 'postman',
  'headless', 'phantomjs', 'selenium', 'puppeteer'
];
const SECURITY_HEADERS = {
  'Server': 'nginx/1.18.0 (Ubuntu)',
  'Content-Security-Policy': [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: https://avatars.githubusercontent.com",
    "connect-src 'self'",
    "frame-ancestors 'none'",
    "object-src 'none'",
  ].join('; '),
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  'Cross-Origin-Opener-Policy': 'same-origin',
  'X-Robots-Tag': 'noindex, nofollow, noarchive',
};

function isBot(userAgent) {
  if (!userAgent) return false;
  const ua = userAgent.toLowerCase();
  return BOT_USER_AGENTS.some(bot => ua.includes(bot));
}

class ContentCleaner {
  comments(comment) {
    comment.remove();
  }
  element(element) {
    if (element.tagName === 'meta' && element.getAttribute('name') === 'generator') {
      element.remove();
    }
  }
}

async function getKstDateString() {
  const date = new Date();
  date.setUTCHours(date.getUTCHours() + 9);
  return date.toISOString().split('T')[0];
}

async function handleViewsApi(request) {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };

  if (request.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  if (typeof VIEWS_KV === 'undefined') {
    return new Response(JSON.stringify({ error: 'KV not configured', total: 0, daily: 0 }), {
      status: 200,
      headers: corsHeaders
    });
  }

  try {
    const todayStr = await getKstDateString();
    const totalKey = 'views:total';
    const dailyKey = `views:daily:${todayStr}`;

    let total = parseInt(await VIEWS_KV.get(totalKey)) || 0;
    let daily = parseInt(await VIEWS_KV.get(dailyKey)) || 0;

    if (request.method === 'POST') {
      total += 1;
      daily += 1;
      await Promise.all([
        VIEWS_KV.put(totalKey, total.toString()),
        VIEWS_KV.put(dailyKey, daily.toString())
      ]);
    }

    return new Response(JSON.stringify({ total, daily }), {
      status: 200,
      headers: corsHeaders
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message, total: 0, daily: 0 }), {
      status: 500,
      headers: corsHeaders
    });
  }
}

async function handleRequest(request) {
  const url = new URL(request.url);

  if (url.pathname === '/api/views') {
    return handleViewsApi(request);
  }

  const userAgent = request.headers.get('User-Agent') || '';
  if (isBot(userAgent)) {
    return new Response('Access Denied', { status: 403 });
  }
  const isProtectedFile = PROTECTED_EXTENSIONS.some(ext => url.pathname.toLowerCase().endsWith(ext));
  if (isProtectedFile) {
    const referer = request.headers.get('Referer') || '';
    if (referer && !referer.includes(ALLOWED_ORIGIN)) {
      return new Response('Access Denied', {
        status: 403,
        headers: { 'Content-Type': 'text/plain' },
      });
    }
  }
  const originUrl = `${GITHUB_PAGES_ORIGIN}${url.pathname}${url.search}`;
  const originResponse = await fetch(originUrl, {
    method: request.method,
    headers: request.headers,
  });
  const responseHeaders = new Headers(originResponse.headers);
  SENSITIVE_HEADERS.forEach(header => responseHeaders.delete(header));
  for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
    responseHeaders.set(key, value);
  }
  const contentType = responseHeaders.get('Content-Type') || '';
  if (contentType.includes('text/html')) {
    const cleaner = new ContentCleaner();
    return new HTMLRewriter()
      .on('*', cleaner)
      .on('meta[name="generator"]', cleaner)
      .transform(
        new Response(originResponse.body, {
          status: originResponse.status,
          statusText: originResponse.statusText,
          headers: responseHeaders,
        })
      );
  }
  return new Response(originResponse.body, {
    status: originResponse.status,
    statusText: originResponse.statusText,
    headers: responseHeaders,
  });
}

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request));
});
