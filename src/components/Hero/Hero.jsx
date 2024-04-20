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
  Year,
} from './Hero.styled';
import carBanner1x from '../../assets/banner-car.png';
import carBanner2x from '../../assets/banner-car-2x.png';
import { SearchForm } from '../SearchForm/SearchForm';

export const Hero = () => {
  return (
    <>
      <HeroWrap>
        <BannerBg>
          <HeroImgWrapp>
            <picture>
              <source srcSet={`${carBanner1x} 1x, ${carBanner2x} 2x`} />
              <img src={carBanner1x} alt="Car banner" />
            </picture>
          </HeroImgWrapp>
          <Bubble>
            <Year>2023</Year>
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
      {/* <SearchForm /> */}
    </>
  );
};
