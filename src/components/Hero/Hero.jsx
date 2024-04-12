import { Navigation } from '../Header/Navigation/Navigation';
import {
  BannerBg,
  Bubble,
  CarName,
  ContactNow,
  Cost,
  Disclaimer,
  Duration,
  HeroImgWrapp,
  HeroWrap,
  Month,
  Percentage,
  PriceWrapp,
} from './Hero.styled';
import carBanner1x from '../../assets/banner-car.png';
import carBanner2x from '../../assets/banner-car-2x.png';

export const Hero = () => {
  return (
    <HeroWrap>
      {/* <Navigation /> */}
      <BannerBg>
        <HeroImgWrapp>
          <picture>
            <source srcSet={`${carBanner1x} 1x, ${carBanner2x} 2x`} />
            <img src={carBanner1x} alt="Car banner" />
          </picture>
        </HeroImgWrapp>
        <Bubble>
          <CarName>Mercedes C-Class</CarName>
          <Percentage>Just pay 30% in advance</Percentage>
          <PriceWrapp>
            <Cost>$599/</Cost>
            <div>
              <Month>month</Month>
              <Duration>in 4 years</Duration>
            </div>
          </PriceWrapp>
          <Disclaimer>
            * Promotional packages exclusively for loyal customers
          </Disclaimer>
          <ContactNow type="button">Contact Now</ContactNow>
        </Bubble>
      </BannerBg>
    </HeroWrap>
  );
};
