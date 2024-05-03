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
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-bottom: 60px;
`;

export const ShowMore = styled.button`
  display: block;
  font-weight: 700;
  font-size: 16px;
  line-height: 125%;
  min-width: 179px;
  margin: 0 auto;

  outline: none;
  border: none;

  border-radius: 5px;
  padding: 12px 47px;

  color: ${(p) => p.theme.colors.blue};
  background-color: ${(p) => p.theme.colors.yellow};

  transition: background-color ${(p) => p.theme.transition};

  &:hover,
  :focus {
    background-color: #f0a500;
  }
`;