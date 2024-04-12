import styled from 'styled-components';
import banner from '../../assets/banner-min.jpg';
import banner2x from "../../assets/banner-2x-min.jpg"

export const BannerBg = styled.div`
  display: block;
  width: 100%;
  height: 100vh;
  background-image: url(${banner});
  background-repeat: no-repeat;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${banner2x});
  }
`;
