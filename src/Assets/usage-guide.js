// Example usage of the organized images

/* 
USAGE EXAMPLES:

1. Import all images from main index:
import { ProductImages, ESDArray, AccessoriesArray } from '../Assets/index.js';

2. Import specific category images:
import { ESDImages, UniformImages, CategoryImages } from '../Assets/categoryImages.js';

3. Import individual images:
import { ESDImage1, UniformImage2, AccessoryImage3 } from '../Assets/categoryImages.js';

4. Use in component:
const MyComponent = () => {
  const [category, setCategory] = useState('ESD & Lint Free');
  const currentImages = CategoryImages[category];
  
  return (
    <div>
      {currentImages.map((image, index) => (
        <img key={index} src={image} alt={`${category} ${index + 1}`} />
      ))}
    </div>
  );
};

5. Dynamic product mapping (like in CatelogueSection):
const productData = {
  'ESD & Lint Free': [
    { title: 'Product 1', image: ESDArray[0] },
    { title: 'Product 2', image: ESDArray[1] },
  ],
  'Uniforms': [
    { title: 'Product 1', image: UniformsArray[0] },
    { title: 'Product 2', image: UniformsArray[1] },
  ],
};

AVAILABLE CATEGORIES:
- 'ESD & Lint Free' (5 images)
- 'Uniforms' (4 images) 
- 'Single Use' (7 images)
- 'Accessories' (8 images)

MAIN ASSETS AVAILABLE:
- ApparelImage, AtiraImage, CatalogueImage
- DocImage, DocTwoImage, FooterLogo
- GMPImage, HeroImage, ISO13485Image, ISO9001Image
- LogoImage, PlaceholderImage, etc.
*/

export const USAGE_GUIDE = {
  categories: ['ESD & Lint Free', 'Uniforms', 'Single Use', 'Accessories'],
  imageCounts: {
    'ESD & Lint Free': 5,
    'Uniforms': 4,
    'Single Use': 7,
    'Accessories': 8
  },
  importExamples: {
    allImages: "import { ProductImages } from '../Assets/index.js';",
    categorySpecific: "import { ESDImages, CategoryImages } from '../Assets/categoryImages.js';",
    individual: "import { ESDImage1, UniformImage2 } from '../Assets/categoryImages.js';"
  }
};
