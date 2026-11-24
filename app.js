import { CERAMIC_COLLECTIONS, CERAMIC_TEXTURES } from './ceramic-textures.js';

const viewer = document.querySelector('#rug-viewer');
const options = document.querySelector('#texture-options');
const selectedLabel = document.querySelector('#selected-texture-label');
const collectionLabel = document.querySelector('#collection-label');
const productName = document.querySelector('#product-name');
const productDescription = document.querySelector('#product-description');
const placementNote = document.querySelector('#placement-note');
const launchButton = document.querySelector('#launch-ar');
const modelArTrigger = document.querySelector('#model-ar-trigger');
const qrDialog = document.querySelector('#qr-dialog');
const qrImage = document.querySelector('#qr-image');
const qrSize = document.querySelector('#qr-size');
const params = new URLSearchParams(window.location.search);
const requestedCollection = CERAMIC_COLLECTIONS.find((collection) => collection.id === params.get('collection'));
const linkedTexture = CERAMIC_TEXTURES.find((texture) => texture.id === params.get('texture'));
const activeCollection = requestedCollection
  || CERAMIC_COLLECTIONS.find((collection) => collection.textures.some((texture) => texture.id === linkedTexture?.id))
  || CERAMIC_COLLECTIONS[0];
let activeTexture = activeCollection.textures[0];

const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

function productUrl(texture) {
  const url = new URL(window.location.href);
  url.pathname = url.pathname.replace(/[^/]*$/, 'index.html');
  url.searchParams.set('collection', activeCollection.id);
  url.searchParams.set('texture', texture.id);
  return url.href;
}

function openArOrQr() {
  if (isMobileDevice) {
    viewer.activateAR();
    return;
  }

  // The QR code opens the product page on the phone so its AR action is
  // initiated by a real user tap. Chrome may block automatic Android intents.
  const url = productUrl(activeTexture);
  qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=500x500&format=svg&data=${encodeURIComponent(url)}`;
  qrImage.alt = `QR code to open the ${activeTexture.name} ceramic texture on mobile`;
  qrSize.textContent = `${activeTexture.name} selected`;
  qrDialog.showModal();
}

function selectTexture(texture) {
  activeTexture = texture;
  viewer.src = texture.glb;
  viewer.setAttribute('ios-src', texture.usdz);
  viewer.setAttribute('ar-placement', activeCollection.arPlacement);
  viewer.alt = `${texture.name} ceramic texture in AR`;
  productName.textContent = texture.name;
  productDescription.textContent = texture.description;
  collectionLabel.textContent = activeCollection.name;
  placementNote.textContent = `Place on ${activeCollection.arPlacement} · AR preview`;
  selectedLabel.textContent = texture.name;
  launchButton.textContent = `View ${texture.name} in AR`;
  window.history.replaceState({}, '', productUrl(texture));
}

const initialTexture = activeCollection.textures.find((texture) => texture.id === linkedTexture?.id) || activeTexture;

activeCollection.textures.forEach((texture) => {
  const label = document.createElement('label');
  label.className = 'texture-option';
  label.innerHTML = `
    <input type="radio" name="ceramic-texture" value="${texture.id}" ${texture.id === initialTexture.id ? 'checked' : ''}>
    <img src="${texture.thumbnail}" alt="${texture.name} ceramic texture thumbnail">
    <span>${texture.name}</span>`;
  label.querySelector('input').addEventListener('change', () => selectTexture(texture));
  options.append(label);
});

selectTexture(initialTexture);
launchButton.addEventListener('click', openArOrQr);
modelArTrigger.addEventListener('click', openArOrQr);
qrDialog.querySelector('.dialog-close').addEventListener('click', () => qrDialog.close());
