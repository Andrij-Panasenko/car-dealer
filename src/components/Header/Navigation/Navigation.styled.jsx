import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LowerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  outline: 1px solid red;
  height: 46px;
  background-color: rgba(255, 255, 255, 0.29);
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 43px;
`;

export const NavigationLink = styled(Link)`
  color: ${(p) => p.theme.colors.blue};
  text-transform: uppercase;
  font-weight: 700;
  font-size: 16px;
  line-height: 125%;
`;

export const ContactSell = styled.button`
  font-weight: 700;
  font-size: 16px;
  line-height: 125%;
  text-align: center;
  width: 167px;
  height: 34px;

  outline: none;
  border: none;
  border-radius: 5px;

  transition: background-color ${(p) => p.theme.transition};

  color: ${(p) => p.theme.colors.blue};

  background-color: ${(p) => p.theme.colors.yellow};

  &:hover {
    background-color: #f0a500;
  }
`;

export const CustomerCorner = styled.ul`
  display: flex;
  gap: 24px;

  & > Li {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  & > Li > p {
    font-weight: 700;
    font-size: 14px;
    line-height: 143%;

    color: ${(p) => p.theme.colors.blue};
  }
`;
