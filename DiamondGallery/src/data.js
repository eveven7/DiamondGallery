// import icons
import { FaYoutube, FaInstagram, FaGithub } from 'react-icons/fa';
import { BsChatDotsFill } from 'react-icons/bs';

// import images
import AboutImg from '../src/assets/img/features/ourStory.png';
import Feature1Img from '../src/assets/img/features/rings.png';
import Feature2Img from '../src/assets/img/features/earings.png';
import Feature3Img from '../src/assets/img/features/necklaces.png';
import Feature4Img from '../src/assets/img/features/bracelets.png';
import Reviews1Img from '../src/assets/img/testimonials/reviews1.jpg';
import Reviews2Img from '../src/assets/img/testimonials/reviews2.jpg';
import Reviews3Img from '../src/assets/img/testimonials/reviews3.jpg';
import LogoV2 from '../src/assets/img/logo3.png';
import HeroImage from '../src/assets/img/features/10295.png';

export const navigationData = [
  {
    name: 'Deliver',
    href: '#',
  },
  {
    name: 'About',
    href: '#',
  },
  {
    name: 'Features',
    href: '#',
  },
  {
    name: 'Signup',
    href: '#',
  },
];

export const heroData = {
  title: ` THE DIAMOND GALLERY`,
  subtitle:
    'Offering extraordinary, full-service jewellery services is part of our history. Through our endless love and passion for diamonds and jewels, we offer customers an efficient and exciting experience that is unforgettable',
  btnText: 'Contact us',
  image: HeroImage,
};

export const aboutData = {
  image: AboutImg,
  title: 'Our Story',
  subtitle:
    'We have access to the best, most luxurious diamonds locally and abroad, having all of them ethically sourced and certified. Added to that, from all our travels, and being privy to the most exclusive jewellery in the world, we wanted to share this beauty together with our own designs, with our clients',
};

export const featuresData = {
  title: 'Personalise Your Dream Piece',
  subtitle:
    'Through our endless love of diamonds and gold, thus paved the foundation for us to create our concept boutique of High Luxury, Bespoke and Custom made jewellery pieces just for you',
  list: [
    {
      image: Feature1Img,
  
      title: 'RINGS',
      description:
        'A Collection Of Elegance, Opulance, And Sophistication, Whilst Still Comfortable For Daily Use',
      linkText: 'Show me',
      delay: '400',
    },
    {
      image: Feature2Img,

      title: 'EARRINGS',
      description:
        'Beautiful Diamond And Gemstone Variations For Both Everyday Use & Special Occasions.',
      linkText: 'Show me',
      delay: '700',
    },
    {
      image: Feature3Img,

      title: 'NECKLACES',
      description:
        'From everyday neck pieces to downright statement glam',
      linkText: 'Show me',
      delay: '1000',
    },
    {
      image: Feature4Img,

      title: 'BRACELETS & BANGLES',
      description:
        'Diamond & Gold Sets That Are Forever Timeless Classics Yet Still Being Modern & Elegant',
      linkText: 'Show me',
      delay: '1300',
    },
  ],
};

export const testimonialsData = [
  {
    image: Reviews1Img,
    name: 'Milania and Thomas',
    message:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores velit magni expedita dicta doloremque cum voluptate, amet eligendi consectetur quam dolorem corrupti similique libero. Quidem doloremque nulla quasi debitis error?.',
    delay: '300',
  },
  {
    image: Reviews2Img,
    name: 'Simona',
    message:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores velit magni expedita dicta doloremque cum voluptate, amet eligendi consectetur quam dolorem corrupti similique libero. Quidem doloremque nulla quasi debitis error?.',
    delay: '600',
  },
  {
    image: Reviews3Img,
    name: 'Kevin',
    message:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores velit magni expedita dicta doloremque cum voluptate, amet eligendi consectetur quam dolorem corrupti similique libero. Quidem doloremque nulla quasi debitis error?.',
    delay: '900',
  },
];

export const ctaData = {
  title: 'Contact Us From Here',
  subtitle: 'Create Your Own Custom Piece - Book an appointment with us',
  btnText1: 'Contact us',
  btnText2: 'Sign up',
};

export const footerData = {
  logo: LogoV2,
  address: 'Adress Lorem lorem lorem 111111',
  email: 'info@diamonds.yahho',
  phone: '1-111-1111',
  list1: [
    {
      name: 'Profile',
      href: '#',
    },
    {
      name: 'Features',
      href: '#',
    },
    {
      name: 'Careers',
      href: '#',
    },
    {
      name: 'DW News',
      href: '#',
    },
  ],
  list2: [
    {
      name: 'Support',
      href: '#',
    },
    {
      name: 'Sign Up',
      href: '#',
    },
    {
      name: 'Guide',
      href: '#',
    },
    {
      name: 'Reports',
      href: '#',
    },
    {
      name: 'Q & A',
      href: '#',
    },
  ],
  socialList: [
    {
      icon: <FaYoutube />,
      href: '#',
    },
    {
      icon: <FaInstagram />,
      href: '#',
    },
    {
      icon: <FaGithub />,
      href: '#',
    },
  ],
};

export const copyrightData = {
  text: '© Diamond, 2022. All rights reserved. Company Registration Number: 000000000.',
  icon: <BsChatDotsFill />,
};
