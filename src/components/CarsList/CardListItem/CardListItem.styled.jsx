import styled from 'styled-components';

export const ListItem = styled.li`
  outline: 1px solid red;
  font-weight: 700;
  font-size: 14px;
  width: 270px;

  display: flex;
  flex-direction: column;
  gap: 8px;

  color: ${(p) => p.theme.colors.text};
`;

export const Img = styled.img`
  border-radius: 10px;
  width: 270px;
  object-fit: contain;
`;

export const Overlay = styled.div`
  display: block;
  width: 270px;
  height: 180px;
  background-color: rgba(25, 36, 89, 0.8);
  border-radius: 10px;
  padding: 30px 45px;

  position: absolute;

  transition: transform ${(p) => p.theme.transition};
`;

export const BoxOverlay = styled.div`
  position: relative;
  overflow: hidden;

  &:hover ${Overlay} {
    transform: translateY(-100%);
  }
`;

export const AddBtn = styled.button`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-start;
  border-radius: 5px;
  min-width: 178px;
  height: 35px;
  padding: 5px 25px;
  margin-bottom: 10px;

  border: none;

  font-weight: 700;
  font-size: 14px;
  line-height: 143%;

  color: ${(p) => p.theme.colors.blue};
  background-color: ${(p) => p.theme.colors.yellow};
`;

export const ContactBtn = styled.button`
  display: flex;
  gap: 8px;

  align-items: center;
  justify-content: flex-start;

  border-radius: 5px;
  min-width: 178px;
  height: 35px;
  padding: 5px 25px;

  border: none;

  font-weight: 700;
  font-size: 14px;
  line-height: 143%;

  color: ${(p) => p.theme.colors.white};
  background-color: #0066b3;
`;

export const HeadSetSvg = styled.svg`
  stroke: #ffffff;
`;

export const CarNameTittle = styled.h2`
  font-weight: inherit;
  font-size: inherit;
  text-transform: uppercase;
  color: inherit;
`;

export const CarPrice = styled.p`
  font-weight: inherit;
  font-size: inherit;
`;

export const SubsidyWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;

export const Subsidy = styled.p`
  font-weight: 600;
  font-size: 12px;
  line-height: 100%;
  color: ${(p) => p.theme.colors.subtitle};
`;
