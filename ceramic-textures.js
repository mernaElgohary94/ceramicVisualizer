// Set AR placement once per ceramic product collection.
// Use 'floor' for horizontal surfaces and 'wall' for vertical surfaces.
export const CERAMIC_COLLECTION_SETTINGS = {
  'ecostone-cross-cut': {
    name: 'Ecostone Cross Cut',
    arPlacement: 'floor',
  },
};

export const WALL_COLLECTION_SETTINGS = {
  'wall-paintings': {
    name: 'wall paintings',
    arPlacement: 'wall',
  },
};
// Ceramic texture registry. Add one entry per texture and point `thumbnail`
// to its photograph. Replace the model files with a model that uses the same tile texture.
export const CERAMIC_TEXTURES = [
  {
    id: 'Fog-Mosaic',
    collectionId: 'ecostone-cross-cut',
    name: 'Fog Mosaic',
    description: 'Ecostone Fog Cross Cut Matte (2x2) Mosaic Porcelain Tile',
    thumbnail: './assets/thumbnails/fog-mosaic.webp',
    glb: './assets/models/fog-mosaic.glb',
    usdz: './assets/models/wall.usdz',
  },
  {
    id: 'Ecostone-Fossil',
    collectionId: 'ecostone-cross-cut',
    name: 'Ecostone Fossil',
    description: 'Ecostone Fossil Cross Cut Matte (32x96) Porcelain Tile.',
    thumbnail: './assets/thumbnails/ecostone-fossil.webp',
    glb: './assets/models/ecostone-fossil.glb',
    usdz: './assets/models/ecostone-fossil.usdz',
  },
  {
    id: 'Ecostone-Mist',
    collectionId: 'ecostone-cross-cut',
    name: 'Ecostone Mist',
    description: 'Ecostone Mist Cross Cut Matte (48x48) Porcelain Tile',
    thumbnail: './assets/thumbnails/ecostone-mist.webp',
    glb: './assets/models/ecostone-mist.glb',
    usdz: './assets/models/ecostone-mist.usdz',
  },
  {
    id: 'Ecostone-Pumice',
    collectionId: 'ecostone-cross-cut',
    name: 'Ecostone Pumice',
    description: 'Ecostone Pumice Cross Cut Matte (48x48) Porcelain Tile',
    thumbnail: './assets/thumbnails/ecostone-pumice.webp',
    glb: './assets/models/ecostone-pumice.glb',
    usdz: './assets/models/ecostone-pumice.usdz',
  },
  {
    id: 'Yellow',
    collectionId: 'wall-paintings',
    name: 'Yellow',
    description: 'Yellow wall painting',
    thumbnail: './assets/thumbnails/yellow.webp',
    glb: './assets/models/yellow.glb',
    usdz: './assets/models/yellow.usdz',
  },
  {
    id: 'white',
    collectionId: 'wall-paintings',
    name: 'White',
    description: 'White wall painting',
    thumbnail: './assets/thumbnails/white.webp',
    glb: './assets/models/white.glb',
    usdz: './assets/models/white.usdz',
  },
  {
    id: 'grey',
    collectionId: 'wall-paintings',
    name: 'Grey',
    description: 'Grey wall painting',
    thumbnail: './assets/thumbnails/grey.webp',
    glb: './assets/models/grey.glb',
    usdz: './assets/models/grey.usdz',
  },
  {
    id: 'brick',
    collectionId: 'wall-paintings',
    name: 'Brick',
    description: 'Brick wall painting',
    thumbnail: './assets/thumbnails/brick.webp',
    glb: './assets/models/brick.glb',
    usdz: './assets/models/brick.usdz',
  },
];

// Collections power the product-level links. Add four or more texture entries
// with the same collectionId to make another ceramic product page.
export const CERAMIC_COLLECTIONS = Object.values(
  CERAMIC_TEXTURES.reduce((collections, texture) => {
    const { collectionId } = texture;
    if (!collections[collectionId]) {
      const settings = CERAMIC_COLLECTION_SETTINGS[collectionId] || {};
      collections[collectionId] = {
        id: collectionId,
        name: settings.name || collectionId,
        arPlacement: settings.arPlacement === 'wall' ? 'wall' : 'floor',
        textures: [],
      };
    }
    collections[collectionId].textures.push(texture);
    return collections;
  }, {}),
);
