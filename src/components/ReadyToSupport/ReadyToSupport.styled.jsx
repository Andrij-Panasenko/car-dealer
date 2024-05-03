import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 80px;
  padding-bottom: 150px;
`;

export const SectionWrapp = styled.div`
  width: 1147px;
  margin: 0 auto;
`;

export const Wrapp = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 96px;

  & > div {
    width: 347px;
  }
`;

export const DayWeek = styled.span`
  font-weight: 600;
`;

export const Here = styled(Link)`
  font-weight: 700;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: ${(p) => p.theme.colors.orange};
`;

export const Title = styled.h3`
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 10px;

  color: ${(p) => p.theme.colors.blue};
`;

export const SubText = styled.p`
  font-size: 18px;
  line-height: 161%;
  color: ${(p) => p.theme.colors.black};
`;

export const StorWrap = styled.div`
  display: flex;
  gap: 16px;
`;

export const BottomMenu = styled.div`
  border-top: 1px solid #dddddd;
  border-bottom: 1px solid #dddddd;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Business = styled.div`
  display: flex;
  gap: 60px;
`;

export const BusinessLink = styled(Link)`
  padding-top: calc(25px - 16px);
  padding-bottom: calc(25px - 16px);

  font-weight: 500;
  font-size: 16px;
  line-height: 181%;

  color: ${(p) => p.theme.colors.blue};
`;

export const Copyright = styled.p`
  font-size: 14px;
  line-height: 207%;

  color: ${(p) => p.theme.colors.blue};
`;

export const CarVip = styled.span`
  font-weight: 600;
`;

export const Studio = styled.span`
  font-weight: 600;
  color: ${(p) => p.theme.colors.orange};
`;
