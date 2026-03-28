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

async function handleRequest(request) {
  const url = new URL(request.url);
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
