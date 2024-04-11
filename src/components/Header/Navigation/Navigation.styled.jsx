import styled from 'styled-components';

export const LowerHeader = styled.div`
  display: flex;
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
  text-transform: uppercase;
  font-weight: 700;
  font-size: 16px;
  line-height: 125%;

  color: ${(p) => p.theme.colors.blue};
`;
