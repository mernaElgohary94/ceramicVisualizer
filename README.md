# Ceramic AR Visualizer

A small, deployable web experience for previewing ceramic textures in AR.

## Add or replace ceramic textures

All product data lives in [`ceramic-textures.js`](./ceramic-textures.js). For every entry in `CERAMIC_TEXTURES`, set:

- `thumbnail` to the texture photograph (JPG, PNG, WebP, or SVG).
- `glb` with the Android/web 3D model for that texture.
- `usdz` with the iPhone/iPad AR model for that texture.

The four supplied SVG texture images are placeholders. Replace them with your own photographs and keep the file paths, or update each entry's `thumbnail` path. The model viewer will use the current placeholder model until you supply texture-specific models.

## Asset folders

```
assets/
  models/       # GLB and USDZ models
  thumbnails/   # texture photographs
```

## Local preview

Because AR models and browser modules need an HTTP server, run one from this folder, for example:

```powershell
npx serve .
```

For device AR testing, deploy the folder to any HTTPS host. iOS opens USDZ in Apple Quick Look and compatible Android devices open GLB in Google Scene Viewer. Desktop and unsupported devices retain the interactive 3D view.

## Desktop QR handoff

On a laptop, the AR buttons display a QR code instead of attempting to launch AR. The code links to the dedicated [`ar.html`](./ar.html) launcher, not the product page: it sends iPhone/iPad visitors directly to the selected USDZ model in Apple Quick Look and Android visitors to the selected GLB model in Google Scene Viewer. This needs a URL the phone can reach: use a public HTTPS deployment for normal use. A `localhost` URL on a laptop cannot be reached by a phone.
