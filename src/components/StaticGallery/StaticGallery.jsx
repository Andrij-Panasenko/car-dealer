import tesla from '../../assets/gallery/tesla.jpg';
import tesla2x from '../../assets/gallery/tesla-2x.jpg';
import lambo from '../../assets/gallery/lambo.jpg';
import lambo2x from '../../assets/gallery/lambo-2x.jpg';
import headlight from '../../assets/gallery/headlight.jpg';
import headlight2x from '../../assets/gallery/headlight-2x.jpg';
import hood from '../../assets/gallery/lambohood.jpg';
import hood2x from '../../assets/gallery/lambohood-2x.jpg';
import volkswagen from '../../assets/gallery/volkswagen.jpg';
import volkswagen2x from '../../assets/gallery/volkswagen-2x.jpg';
import glass from '../../assets/gallery/glass.jpg';
import glass2x from '../../assets/gallery/glass-2x.jpg';
import { GalleryWrapper } from './StaticGallery.styled';

export const StaticGallery = () => {
  return (
    <section>
      <h2 hidden>Car dealer</h2>
      <GalleryWrapper>
        <picture>
          <source srcSet={`${tesla} 1x, ${tesla2x} 2x`} />
          <img src={tesla} alt="Tesla car" />
        </picture>
        <picture>
          <source srcSet={`${lambo} 1x, ${lambo2x} 2x`} />
          <img src={lambo} alt="Lamborghini bumper" />
        </picture>
        <picture>
          <source srcSet={`${headlight} 1x, ${headlight2x} 2x`} />
          <img src={headlight} alt="Headlight" />
        </picture>
        <picture>
          <source srcSet={`${hood} 1x, ${hood2x} 2x`} />
          <img src={hood} alt="Lamborghini hood" />
        </picture>
        <picture>
          <source srcSet={`${volkswagen} 1x, ${volkswagen2x} 2x`} />
          <img src={volkswagen} alt="Volkswagen" />
        </picture>
        <picture>
          <source srcSet={`${glass} 1x, ${glass2x} 2x`} />
          <img src={glass} alt="Rearview mirror" />
        </picture>
      </GalleryWrapper>
    </section>
  );
};
