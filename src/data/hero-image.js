import uniqid from 'uniqid';

import image1 from '../assets/hero-image-webp/hero-image-1.webp';
import image2 from '../assets/hero-image-webp/hero-image-2.webp';
import image3 from '../assets/hero-image-webp/hero-image-3.webp';
import image4 from '../assets/hero-image-webp/hero-image-4.webp';
import image5 from '../assets/hero-image-webp/hero-image-5.webp';

const heroImageData = [
  {
    id: uniqid('hero-image-'),
    image: image1,
    alt: 'Rak Buku',
  },
  {
    id: uniqid('hero-image-'),
    image: image2,
    alt: 'Rak Buku',
  },
  {
    id: uniqid('hero-image-'),
    image: image3,
    alt: 'Rak Buku',
  },
  {
    id: uniqid('hero-image-'),
    image: image4,
    alt: 'Rak Buku',
  },
  {
    id: uniqid('hero-image-'),
    image: image5,
    alt: 'Rak Buku',
  },
];

export default heroImageData;
