import { CERAMIC_TEXTURES } from './ceramic-textures.js';

const params = new URLSearchParams(window.location.search);
const selected = CERAMIC_TEXTURES.find((texture) => texture.id === params.get('texture')) || CERAMIC_TEXTURES[0];
const status = document.querySelector('#ar-status');
const arLaunchButton = document.querySelector('#ar-launch-button');
const fallback = document.querySelector('#ar-fallback');
const fallbackUrl = new URL('./index.html', window.location.href);
fallbackUrl.searchParams.set('collection', selected.collectionId);
fallbackUrl.searchParams.set('texture', selected.id);
fallback.href = fallbackUrl.href;

const isIos = /iPhone|iPad|iPod/i.test(navigator.userAgent);
const isAndroid = /Android/i.test(navigator.userAgent);

if (isIos) {
  status.textContent = `Tap below to open ${selected.name} in Apple AR Quick Look.`;
  arLaunchButton.href = new URL(selected.usdz, window.location.href).href;
  arLaunchButton.textContent = `Open ${selected.name} in AR`;
} else if (isAndroid && !params.has('fallback')) {
  status.textContent = `Tap below to open ${selected.name} in Google Scene Viewer.`;
  const modelUrl = new URL(selected.glb, window.location.href).href;
  const sceneFallback = new URL('./ar.html', window.location.href);
  sceneFallback.searchParams.set('collection', selected.collectionId);
  sceneFallback.searchParams.set('texture', selected.id);
  sceneFallback.searchParams.set('fallback', '1');
  const sceneViewer = new URL('https://arvr.google.com/scene-viewer/1.0');
  sceneViewer.searchParams.set('file', modelUrl);
  sceneViewer.searchParams.set('mode', 'ar_preferred');
  sceneViewer.searchParams.set('resizable', 'false');
  sceneViewer.searchParams.set('title', `Ceramic — ${selected.name}`);
  arLaunchButton.href = `intent://${sceneViewer.host}${sceneViewer.pathname}${sceneViewer.search}#Intent;scheme=https;package=com.google.ar.core;action=android.intent.action.VIEW;S.browser_fallback_url=${encodeURIComponent(sceneFallback.href)};end;`;
  arLaunchButton.textContent = `Open ${selected.name} in AR`;
} else {
  status.textContent = 'AR is not available on this device. You can still view the ceramic in 3D.';
  arLaunchButton.hidden = true;
}
