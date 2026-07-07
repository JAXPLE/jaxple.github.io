const CHECK_INTERVAL_MS = 700;
const DEBUGGER_PAUSE_THRESHOLD_MS = 100;
const DEVTOOLS_VIEWPORT_THRESHOLD_PX = 160;
const SOURCE_REPOSITORY_URL = 'https://github.com/JAXPLE/jaxple.github.io';

const LOCK_SCREEN_HTML = `
  <div style="background-color:#000;color:#10b981;min-height:100vh;display:flex;align-items:center;justify-content:center;font-family:monospace;font-size:20px;flex-direction:column;text-align:center;padding:24px;box-sizing:border-box;">
    <p>[System Auth Failed]</p>
    <p>코드가 궁금하시다면, <a href="${SOURCE_REPOSITORY_URL}" style="color:#34d399;text-decoration:underline;">${SOURCE_REPOSITORY_URL}</a> 여기로 들어가서 확인해주세요!</p>
  </div>
`;

let isLocked = false;

/**
 * 코드 열람 시도를 감지하면 현재 페이지를 잠금 화면으로 전환합니다.
 */
export function startCodeProtection() {
  if (import.meta.env.DEV) {
    return;
  }

  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  window.setInterval(runProtectionCheck, CHECK_INTERVAL_MS);
  window.addEventListener('resize', runProtectionCheck);
  document.addEventListener('visibilitychange', runProtectionCheck);
  document.addEventListener('contextmenu', handleContextMenu);
  document.addEventListener('keydown', handleKeydown, true);
}

/**
 * 감지된 코드 열람 시도에 대응해 페이지를 잠금 상태로 만듭니다.
 */
function lockPage() {
  if (isLocked) {
    return;
  }

  if (!document.body) {
    return;
  }

  isLocked = true;
  document.documentElement.style.backgroundColor = '#000';
  document.body.style.margin = '0';
  document.body.style.overflow = 'hidden';
  document.body.innerHTML = LOCK_SCREEN_HTML;
}

/**
 * DevTools가 열렸을 가능성이 있으면 페이지를 잠급니다.
 */
function runProtectionCheck() {
  if (isLocked) {
    return;
  }

  if (!isDevtoolsViewportDetected() && !isDebuggerPauseDetected()) {
    return;
  }

  lockPage();
}

/**
 * 우클릭 검사 메뉴 접근을 차단하고 페이지를 잠급니다.
 */
function handleContextMenu(event: MouseEvent) {
  event.preventDefault();
  event.stopPropagation();
  lockPage();
}

/**
 * 소스 보기 및 개발자 도구 단축키를 차단하고 페이지를 잠급니다.
 */
function handleKeydown(event: KeyboardEvent) {
  if (!isCodeInspectionShortcut(event)) {
    return;
  }

  event.preventDefault();
  event.stopPropagation();
  lockPage();
}

/**
 * 브라우저 외부 너비와 뷰포트 너비의 차이로 가로 도킹된 DevTools를 감지합니다.
 */
function isDevtoolsViewportDetected() {
  if (!isDesktopViewport()) {
    return false;
  }

  const widthGap = Math.abs(window.outerWidth - window.innerWidth);

  return widthGap > DEVTOOLS_VIEWPORT_THRESHOLD_PX;
}

/**
 * 모바일 브라우저 UI 변화가 DevTools로 오탐되는 것을 줄입니다.
 */
function isDesktopViewport() {
  if (window.innerWidth < 768) {
    return false;
  }

  if (navigator.maxTouchPoints > 1) {
    return false;
  }

  return true;
}

/**
 * debugger 실행 지연으로 열린 DevTools를 감지합니다.
 */
function isDebuggerPauseDetected() {
  const before = performance.now();

  try {
    globalThis.Function('debugger')();
  } catch {
    return false;
  }

  return performance.now() - before > DEBUGGER_PAUSE_THRESHOLD_MS;
}

/**
 * 코드 열람에 주로 쓰이는 브라우저 단축키인지 확인합니다.
 */
function isCodeInspectionShortcut(event: KeyboardEvent) {
  const key = event.key.toLowerCase();
  const isPrimaryModifier = event.ctrlKey || event.metaKey;
  const isDevtoolsShortcut = isPrimaryModifier && event.shiftKey && ['i', 'j', 'c'].includes(key);
  const isMacDevtoolsShortcut = event.metaKey && event.altKey && ['i', 'j', 'c'].includes(key);

  if (event.key === 'F12') {
    return true;
  }

  if (isPrimaryModifier && key === 'u') {
    return true;
  }

  return isDevtoolsShortcut || isMacDevtoolsShortcut;
}
