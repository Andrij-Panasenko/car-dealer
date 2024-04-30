import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 80px;
  padding-bottom: 80px;
`;

export const SectionWrapp = styled.div`
  width: 100%;
  max-width: calc(570px * 2 + 30px);
  margin: 0 auto;
`;

export const SectionContainer = styled.div`
  display: flex;
  gap: 30px;

  margin-top: 55px;
`;

export const Testimonial = styled.div`
  border-radius: 5px;
  width: 100%;
  max-width: 570px;

  padding: 69px 30px 20px 30px;

  position: relative;

  background-color: ${(p) => p.theme.colors.grey};
`;

export const Avatar = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 100%;
  border: 5px solid #ffffff;

  position: absolute;
  left: 30px;
  top: 0;
  transform: translateY(-50%);
`;

export const Svg = styled.svg`
  position: absolute;
  top: 0;
  right: 8px;
  transform: translateY(-50%);
`;

export const Review = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;

  margin-bottom: 18px;

  color: ${(p) => p.theme.colors.text};
`;

export const Rating = styled.ul`
  margin-bottom: 16px;
`;

export const Name = styled.h3`
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;

  margin-bottom: 4px;

  color: ${(p) => p.theme.colors.blue};
`;

export const Position = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;

  color: ${(p) => p.theme.colors.blue};
`;
