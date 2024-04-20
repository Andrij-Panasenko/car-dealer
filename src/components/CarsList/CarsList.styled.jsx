import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 80px;
  padding-bottom: 80px;
`;

export const ListContainer = styled.div`
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
`;

export const Divider = styled.div`
  display: block;
  width: 100%;
  height: 187px;
  outline: 1px solid red;
`;

export const ListTittle = styled.h2`
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

export const List = styled.ul`
  /* outline: 1px solid red; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
`;
