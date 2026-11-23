// Ceramic collection registry. Add one entry per texture and point `thumbnail`
// to its photograph. Replace the model files with a model that uses the same tile texture.
export const CERAMIC_TEXTURES = [
  {
    id: 'calacatta-white',
    name: 'Calacatta White',
    description: 'Soft white porcelain with graceful grey marble veining.',
    thumbnail: './assets/thumbnails/calacatta-white.svg',
    glb: './assets/models/mosaic.glb',
    usdz: './assets/models/mosaic.usdz',
  },
  {
    id: 'Ecostone-Fossil',
    name: 'Ecostone Fossil',
    description: 'Ecostone Fossil Cross Cut Matte (32x96) Porcelain Tile.',
    thumbnail: './assets/thumbnails/travertine-sand.svg',
    glb: './assets/models/grey-porcelin.glb',
    usdz: './assets/models/grey-porcelin.usdz',
  },
  {
    id: 'terrazzo-grey',
    name: 'Terrazzo Grey',
    description: 'Contemporary grey terrazzo with a refined flecked finish.',
    thumbnail: './assets/thumbnails/terrazzo-grey.svg',
    glb: './assets/models/rug-160x230.glb',
    usdz: './assets/models/rug-160x230.usdz',
  },
  {
    id: 'slate-charcoal',
    name: 'Slate Charcoal',
    description: 'Deep charcoal stone texture for a bold, modern surface.',
    thumbnail: './assets/thumbnails/slate-charcoal.svg',
    glb: './assets/models/rug-160x230.glb',
    usdz: './assets/models/rug-160x230.usdz',
  },
];
