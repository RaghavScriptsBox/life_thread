// Simple category-based image exports for easy component usage

// ESD & Lint Free Images
export { default as ESDImage1 } from './ESD/Frame 427321813-1.png';
export { default as ESDImage2 } from './ESD/Frame 427321813-2.png';
export { default as ESDImage3 } from './ESD/Frame 427321813-3.png';
export { default as ESDImage4 } from './ESD/Frame 427321813-4.png';
export { default as ESDImage5 } from './ESD/Frame 427321813.png';

// Uniforms Images
export { default as UniformImage1 } from './Uniforms/Frame 427321813-1.png';
export { default as UniformImage2 } from './Uniforms/Frame 427321813-2.png';
export { default as UniformImage3 } from './Uniforms/Frame 427321813.png';
export { default as UniformImage4 } from './Uniforms/Frame 427321814.png';

// Single Use Images
export { default as SingleUseImage1 } from './SingleUseImages/Frame 427321813-1.png';
export { default as SingleUseImage2 } from './SingleUseImages/Frame 427321813-2.png';
export { default as SingleUseImage3 } from './SingleUseImages/Frame 427321813-3.png';
export { default as SingleUseImage4 } from './SingleUseImages/Frame 427321813-4.png';
export { default as SingleUseImage5 } from './SingleUseImages/Frame 427321813-5.png';
export { default as SingleUseImage6 } from './SingleUseImages/Frame 427321813-6.png';
export { default as SingleUseImage7 } from './SingleUseImages/Frame 427321813.png';

// Accessories Images
export { default as AccessoryImage1 } from './Accessories/Frame 427321813-1.png';
export { default as AccessoryImage2 } from './Accessories/Frame 427321813-2.png';
export { default as AccessoryImage3 } from './Accessories/Frame 427321813-3.png';
export { default as AccessoryImage4 } from './Accessories/Frame 427321813-4.png';
export { default as AccessoryImage5 } from './Accessories/Frame 427321813-5.png';
export { default as AccessoryImage6 } from './Accessories/Frame 427321813-6.png';
export { default as AccessoryImage7 } from './Accessories/Frame 427321813-7.png';
export { default as AccessoryImage8 } from './Accessories/Frame 427321813.png';

// Quick access arrays
export const ESDImages = [
  require('./ESD/Frame 427321813-1.png'),
  require('./ESD/Frame 427321813-2.png'),
  require('./ESD/Frame 427321813-3.png'),
  require('./ESD/Frame 427321813-4.png'),
  require('./ESD/Frame 427321813.png')
];

export const UniformImages = [
  require('./Uniforms/Frame 427321813-1.png'),
  require('./Uniforms/Frame 427321813-2.png'),
  require('./Uniforms/Frame 427321813.png'),
  require('./Uniforms/Frame 427321814.png')
];

export const SingleUseImagesArray = [
  require('./SingleUseImages/Frame 427321813-1.png'),
  require('./SingleUseImages/Frame 427321813-2.png'),
  require('./SingleUseImages/Frame 427321813-3.png'),
  require('./SingleUseImages/Frame 427321813-4.png'),
  require('./SingleUseImages/Frame 427321813-5.png'),
  require('./SingleUseImages/Frame 427321813-6.png'),
  require('./SingleUseImages/Frame 427321813.png')
];

export const AccessoryImagesArray = [
  require('./Accessories/Frame 427321813-1.png'),
  require('./Accessories/Frame 427321813-2.png'),
  require('./Accessories/Frame 427321813-3.png'),
  require('./Accessories/Frame 427321813-4.png'),
  require('./Accessories/Frame 427321813-5.png'),
  require('./Accessories/Frame 427321813-6.png'),
  require('./Accessories/Frame 427321813-7.png'),
  require('./Accessories/Frame 427321813.png')
];

// Category mapping for dynamic usage
export const CategoryImages = {
  'ESD & Lint Free': ESDImages,
  'Uniforms': UniformImages,
  'Single Use': SingleUseImagesArray,
  'Accessories': AccessoryImagesArray
};
