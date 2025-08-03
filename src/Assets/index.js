// Main Assets
import ApparelImage from './apparel.png';
import AtiraImage from './Atira.png';
import CatalogueImage from './Catalogue.jpg';
import DocImage from './DocImage.png';
import DocTwoImage from './DocTwoImage.png';
import FooterLogo from './FooterLogo.png';
import FrameImage from './Frame 427321813.png';
import GMPImage from './GMP.png';
import HeroImage from './Hero.jpg';
import HomeDesktopImage from './Home • Desktop (1).png';
import ISO13485Image from './ISO13485.png';
import ISO9001Image from './ISO9001.png';
import LogoImage from './Logo.jpg';
import PlaceholderImage from './PlaceholderImage.png';

// Accessories Images
import AccessoriesFrame1 from './Accessories/Frame 427321813-1.png';
import AccessoriesFrame2 from './Accessories/Frame 427321813-2.png';
import AccessoriesFrame3 from './Accessories/Frame 427321813-3.png';
import AccessoriesFrame4 from './Accessories/Frame 427321813-4.png';
import AccessoriesFrame5 from './Accessories/Frame 427321813-5.png';
import AccessoriesFrame6 from './Accessories/Frame 427321813-6.png';
import AccessoriesFrame7 from './Accessories/Frame 427321813-7.png';
import AccessoriesFrameMain from './Accessories/Frame 427321813.png';

// ESD Images
import ESDFrame1 from './ESD/Frame 427321813-1.png';
import ESDFrame2 from './ESD/Frame 427321813-2.png';
import ESDFrame3 from './ESD/Frame 427321813-3.png';
import ESDFrame4 from './ESD/Frame 427321813-4.png';
import ESDFrameMain from './ESD/Frame 427321813.png';

// Single Use Images
import SingleUseFrame1 from './SingleUseImages/Frame 427321813-1.png';
import SingleUseFrame2 from './SingleUseImages/Frame 427321813-2.png';
import SingleUseFrame3 from './SingleUseImages/Frame 427321813-3.png';
import SingleUseFrame4 from './SingleUseImages/Frame 427321813-4.png';
import SingleUseFrame5 from './SingleUseImages/Frame 427321813-5.png';
import SingleUseFrame6 from './SingleUseImages/Frame 427321813-6.png';
import SingleUseFrameMain from './SingleUseImages/Frame 427321813.png';

// Uniforms Images
import UniformsFrame1 from './Uniforms/Frame 427321813-1.png';
import UniformsFrame2 from './Uniforms/Frame 427321813-2.png';
import UniformsFrameMain from './Uniforms/Frame 427321813.png';
import UniformsFrame814 from './Uniforms/Frame 427321814.png';

// Organized exports by category
export const MainAssets = {
  ApparelImage,
  AtiraImage,
  CatalogueImage,
  DocImage,
  DocTwoImage,
  FooterLogo,
  FrameImage,
  GMPImage,
  HeroImage,
  HomeDesktopImage,
  ISO13485Image,
  ISO9001Image,
  LogoImage,
  PlaceholderImage
};

export const AccessoriesImages = {
  AccessoriesFrame1,
  AccessoriesFrame2,
  AccessoriesFrame3,
  AccessoriesFrame4,
  AccessoriesFrame5,
  AccessoriesFrame6,
  AccessoriesFrame7,
  AccessoriesFrameMain
};

export const ESDImages = {
  ESDFrame1,
  ESDFrame2,
  ESDFrame3,
  ESDFrame4,
  ESDFrameMain
};

export const SingleUseImages = {
  SingleUseFrame1,
  SingleUseFrame2,
  SingleUseFrame3,
  SingleUseFrame4,
  SingleUseFrame5,
  SingleUseFrame6,
  SingleUseFrameMain
};

export const UniformsImages = {
  UniformsFrame1,
  UniformsFrame2,
  UniformsFrameMain,
  UniformsFrame814
};

// Arrays for easy mapping in components
export const AccessoriesArray = [
  AccessoriesFrame1,
  AccessoriesFrame2,
  AccessoriesFrame3,
  AccessoriesFrame4,
  AccessoriesFrame5,
  AccessoriesFrame6,
  AccessoriesFrame7,
  AccessoriesFrameMain
];

export const ESDArray = [
  ESDFrame1,
  ESDFrame2,
  ESDFrame3,
  ESDFrame4,
  ESDFrameMain
];

export const SingleUseArray = [
  SingleUseFrame1,
  SingleUseFrame2,
  SingleUseFrame3,
  SingleUseFrame4,
  SingleUseFrame5,
  SingleUseFrame6,
  SingleUseFrameMain
];

export const UniformsArray = [
  UniformsFrame1,
  UniformsFrame2,
  UniformsFrameMain,
  UniformsFrame814
];

// Combined export for all product images
export const ProductImages = {
  'ESD & Lint Free': ESDArray,
  'Uniforms': UniformsArray,
  'Single Use': SingleUseArray,
  'Accessories': AccessoriesArray
};

// Individual exports (for backwards compatibility)
export {
  // Main Assets
  ApparelImage,
  AtiraImage,
  CatalogueImage,
  DocImage,
  DocTwoImage,
  FooterLogo,
  FrameImage,
  GMPImage,
  HeroImage,
  HomeDesktopImage,
  ISO13485Image,
  ISO9001Image,
  LogoImage,
  PlaceholderImage,
  
  // Accessories
  AccessoriesFrame1,
  AccessoriesFrame2,
  AccessoriesFrame3,
  AccessoriesFrame4,
  AccessoriesFrame5,
  AccessoriesFrame6,
  AccessoriesFrame7,
  AccessoriesFrameMain,
  
  // ESD
  ESDFrame1,
  ESDFrame2,
  ESDFrame3,
  ESDFrame4,
  ESDFrameMain,
  
  // Single Use
  SingleUseFrame1,
  SingleUseFrame2,
  SingleUseFrame3,
  SingleUseFrame4,
  SingleUseFrame5,
  SingleUseFrame6,
  SingleUseFrameMain,
  
  // Uniforms
  UniformsFrame1,
  UniformsFrame2,
  UniformsFrameMain,
  UniformsFrame814
};
