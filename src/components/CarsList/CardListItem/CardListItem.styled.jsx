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
