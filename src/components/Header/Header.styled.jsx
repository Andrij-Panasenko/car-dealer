import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PageHeader = styled.header`
  position: relative;
  z-index: 1000;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1400px;

  padding: 30px 20px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: transparent;
  outline: 1px solid red;

  position: absolute;
  left: 0;
  right: 0;
`;

export const Logo = styled(Link)`
  font-weight: 900;
  font-size: 30px;
  letter-spacing: 0.05em;
  text-transform: capitalize;

  color: ${(p) => p.theme.colors.blue};
`;

export const LocationWrapp = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const Location = styled.p`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.05em;
  width: 100%;
  max-width: 339px;

  color: ${(p) => p.theme.colors.text};
`;

export const ContactsWrapp = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
`;

export const Address = styled.address`
  &::before {
    content: 'Hotline:';
    font-style: normal;
    font-weight: 900;
    font-size: 12px;
    letter-spacing: 0.05em;
    position: absolute;
    top: -15px;

    color: ${(p) => p.theme.colors.orange};
  }
`;

export const AddressLink = styled(Link)`
  font-weight: 900;
  font-size: 14px;
  letter-spacing: 0.05em;
  font-style: normal;

  color: ${(p) => p.theme.colors.blue};
`;

export const SocialMediaList = styled.ul`
  display: flex;
  gap: 16px;

  & > Li {
    width: 24px;
    height: 24px;
  }
`;
