import styled from 'styled-components';
import cagBg from '../../assets/car.jpg';

export const BenefitWrapper = styled.div`
  /* width: 876px; */
  padding-top: 80px;
  padding-bottom: 80px;
  padding-left: 136.5px;
  padding-right: 136.5px;
  height: 550px;

  margin: 0 auto;
  /* background: linear-gradient(
    100deg,
    rgb(25, 36, 89) 55%,
    rgba(47, 61, 133, 0.4) 55%,
    rgba(47, 61, 133, 0.4) 57%,
    rgba(47, 61, 133, 0.2) 57%,

    rgba(47, 61, 133, 0.2) 59%,
    transparent 59%,
    transparent 100%
  ); */
  background: linear-gradient(
    100deg,
    rgb(25, 36, 89) 55%,
    rgba(47, 61, 133, 0.4) 55% 57%,
    rgba(47, 61, 133, 0.2) 57% 59%,
    transparent 59% 100%
  );

  position: relative;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 36px;

  color: ${(p) => p.theme.colors.white};
  margin-bottom: 20px;
`;

export const Action = styled.p`
  font-weight: 500;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.8);

  margin-bottom: 35px;
`;

export const Benefits = styled.ul`
  width: 100%;
  max-width: 570px;
`;

export const ListItem = styled.li`
  font-weight: 500;
  font-size: 18px;

  color: ${(p) => p.theme.colors.white};

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Btn = styled.button`
  font-weight: 700;
  font-size: 16px;
  line-height: 125%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  min-width: 203px;
  height: 44px;

  outline: none;
  border: 3px solid rgba(151, 70, 15, 0.28);
  border-radius: 5px;

  color: ${(p) => p.theme.colors.blue};
  background-color: ${(p) => p.theme.colors.yellow};
`;

export const Icon = styled.svg`
  stroke: rgba(255, 255, 255, 0);
`;

export const CarBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -10;
  display: block;
  width: 882px;
  height: 550px;
  background-image: url(${cagBg});
  background-repeat: no-repeat;
  background-position: right;
`;
