// Ceramic collection registry. Add one entry per texture and point `thumbnail`
// to its photograph. Replace the model files with a model that uses the same tile texture.
export const CERAMIC_TEXTURES = [
  {
    id: 'Fog-Mosaic',
    collectionId: 'ecostone-cross-cut',
    collectionName: 'Ecostone Cross Cut',
    name: 'Fog Mosaic',
    description: 'Ecostone Fog Cross Cut Matte (2x2) Mosaic Porcelain Tile',
    thumbnail: './assets/thumbnails/fog-mosaic.webp',
    glb: './assets/models/fog-mosaic.glb',
    usdz: './assets/models/fog-mosaic.usdz',
  },
  {
    id: 'Ecostone-Fossil',
    collectionId: 'ecostone-cross-cut',
    collectionName: 'Ecostone Cross Cut',
    name: 'Ecostone Fossil',
    description: 'Ecostone Fossil Cross Cut Matte (32x96) Porcelain Tile.',
    thumbnail: './assets/thumbnails/ecostone-fossil.webp',
    glb: './assets/models/ecostone-fossil.glb',
    usdz: './assets/models/ecostone-fossil.usdz',
  },
  {
    id: 'Ecostone-Mist',
    collectionId: 'ecostone-cross-cut',
    collectionName: 'Ecostone Cross Cut',
    name: 'Ecostone Mist',
    description: 'Ecostone Mist Cross Cut Matte (48x48) Porcelain Tile',
    thumbnail: './assets/thumbnails/ecostone-mist.webp',
    glb: './assets/models/ecostone-mist.glb',
    usdz: './assets/models/ecostone-mist.usdz',
  },
  {
    id: 'Ecostone-Pumice',
    collectionId: 'ecostone-cross-cut',
    collectionName: 'Ecostone Cross Cut',
    name: 'Ecostone Pumice',
    description: 'Ecostone Pumice Cross Cut Matte (48x48) Porcelain Tile',
    thumbnail: './assets/thumbnails/ecostone-pumice.webp',
    glb: './assets/models/ecostone-pumice.glb',
    usdz: './assets/models/ecostone-pumice.usdz',
  },
];

// Collections power the product-level links. Add four or more texture entries
// with the same collectionId to make another ceramic product page.
export const CERAMIC_COLLECTIONS = Object.values(
  CERAMIC_TEXTURES.reduce((collections, texture) => {
    const { collectionId, collectionName } = texture;
    if (!collections[collectionId]) {
      collections[collectionId] = { id: collectionId, name: collectionName, textures: [] };
    }
    collections[collectionId].textures.push(texture);
    return collections;
  }, {}),
);
