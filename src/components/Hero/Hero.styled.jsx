import styled from 'styled-components';
import banner from '../../assets/banner-min.jpg';
import banner2x from '../../assets/banner-2x-min.jpg';

export const HeroWrap = styled.div`
  position: relative;
`;

export const BannerBg = styled.div`
  width: 100%;
  max-width: 1440px;

  padding-bottom: 153px;
  padding-top: 153px;
  /* padding-left: 135px; */
  /* padding-right: 212px; */

  background-image: url(${banner});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin: 0 auto;

  display: inline-flex;
  align-items: flex-end;
  justify-content: center;
  gap: 40px;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${banner2x});
  }
`;

export const HeroImgWrapp = styled.div`
  width: 650px;
  height: 300px;
`;

export const Bubble = styled.div`
  width: 320px;
  height: 320px;
  border-radius: 50%;

  padding-top: 94px;
  padding-bottom: 44px;
  padding-left: 73px;
  padding-right: 43px;

  background-color: ${(p) => p.theme.colors.orange};

  outline: 20px solid rgba(255, 255, 255, 0.2);

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const CarName = styled.h2`
  font-family: 'Oswald' sans-serif;
  font-weight: 700;
  font-size: 34px;
  line-height: 100%;
  letter-spacing: 0.05em;
  margin-bottom: 14px;

  color: ${(p) => p.theme.colors.white};

  position: relative;

  &::before {
    content: '2023';
    font-weight: 700;
    font-size: 28px;
    letter-spacing: 0.05em;
    font-family: 'Oswald', sans-serif;

    position: absolute;
    top: -28px;

    color: ${(p) => p.theme.colors.blue};
  }
`;

export const Percentage = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 125%;

  color: ${(p) => p.theme.colors.blue};
`;

export const PriceWrapp = styled.div`
  display: inline-flex;
  align-items: center;
`;

export const Cost = styled.p`
  font-family: 'Oswald', sans-serif;
  font-weight: 700;
  font-size: 72px;
  letter-spacing: 0.05em;

  color: ${(p) => p.theme.colors.white};
`;

export const Month = styled.p`
  font-family: 'Oswald', sans-serif;
  font-weight: 700;
  font-size: 30px;
  letter-spacing: 0.05em;

  color: ${(p) => p.theme.colors.white};
`;

export const Duration = styled.p`
  font-size: 14px;
  font-weight: 700;
  line-height: 143%;
  font-family: 'Mulish', sans-serif;

  color: ${(p) => p.theme.colors.blue};
`;

export const Disclaimer = styled.p`
  font-style: italic;
  font-weight: 700;
  font-size: 14px;
  line-height: 143%;

  margin-bottom: 20px;
  max-width: 270px;

  color: ${(p) => p.theme.colors.white};
`;

export const ContactNow = styled.button`
  font-weight: 700;
  font-size: 16px;
  line-height: 125%;
  text-align: center;

  /* max-width: 146px; */

  border: 3px solid rgba(151, 70, 15, 0.28);
  border-radius: 5px;
  padding: 11px 23px;
  margin: 0 auto;

  background-color: ${(p) => p.theme.colors.yellow};
  color: ${(p) => p.theme.colors.blue};

  transition: background-color ${(p) => p.theme.transition};

  &:hover,
  :focus {
    background-color: #f0a500;
  }
`;
