// =============================================================================
// Cloudflare Worker — jaxple.dev 보안 프록시
//
// 역할:
//   1. GitHub Pages 원본에서 컨텐츠를 가져와 중계
//   2. 모든 응답에 보안 헤더(CSP, X-Frame-Options 등) 주입
//   3. JS 파일 직접 접근 시 Referer 검증 → 다른 도메인에서의 스크립트 인라인 차단
//
// 배포: wrangler deploy (wrangler.toml 참조)
// =============================================================================

const ALLOWED_ORIGIN = 'jaxple.dev';
const GITHUB_PAGES_ORIGIN = 'https://jaxple.github.io';

const SECURITY_HEADERS = {
  'Content-Security-Policy': [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline'",     // 난독화된 self 스크립트 허용
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: https://avatars.githubusercontent.com",
    "connect-src 'self'",
    "frame-ancestors 'none'",                // iframe 삽입 차단
  ].join('; '),
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  'Cross-Origin-Opener-Policy': 'same-origin',
};

async function handleRequest(request) {
  const url = new URL(request.url);

  // JS 파일 직접 요청 시 Referer 검증
  if (url.pathname.endsWith('.js')) {
    const referer = request.headers.get('Referer') || '';
    if (referer && !referer.includes(ALLOWED_ORIGIN)) {
      return new Response('코드가 궁금하시다면, https://github.com/JAXPLE/jaxple.github.io 여기로 들어가서 확인해주세요!', {
        status: 403,
        headers: { 'Content-Type': 'text/plain' },
      });
    }
  }

  // GitHub Pages 원본으로 프록시
  const originUrl = `${GITHUB_PAGES_ORIGIN}${url.pathname}${url.search}`;
  const originResponse = await fetch(originUrl, {
    method: request.method,
    headers: request.headers,
  });

  // 원본 응답 헤더 복사 + 보안 헤더 추가
  const responseHeaders = new Headers(originResponse.headers);
  for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
    responseHeaders.set(key, value);
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
