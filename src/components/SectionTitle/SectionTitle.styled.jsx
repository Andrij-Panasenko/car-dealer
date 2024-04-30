import styled from "styled-components";

export const Tittle = styled.h2`
  display: inline-block;
  font-weight: 700;
  font-size: 24px;
  color: ${(p) => p.theme.colors.blue};
  position: relative;
  margin-bottom: 30px;
  height: 42px;

  &::before {
    content: '';
    display: block;
    width: 100px;
    height: 3px;
    background-color: ${(p) => p.theme.colors.orange};

    position: absolute;
    bottom: 0;
  }
`;