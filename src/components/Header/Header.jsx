import sprite from '../../assets/sprite.svg';
import { Link } from 'react-router-dom';

import {
  Address,
  AddressLink,
  ContactsWrapp,
  HeaderContainer,
  Location,
  LocationWrapp,
  Logo,
  PageHeader,
  SocialIcons,
  SocialMediaList,
} from './Header.styled';

export const Header = () => {
  return (
    <>
      <PageHeader>
        <HeaderContainer>
            <Logo to="/">Car Vip</Logo>
            <LocationWrapp>
              <svg width="24" height="24">
                <use xlinkHref={sprite + '#map-pin'}></use>
              </svg>
              <Location>
                No. 35-37 Huynh Thuc Khang, Ben Nghe Ward, District 1, Ho Chi
                Minh City
              </Location>
            </LocationWrapp>
            <ContactsWrapp>
              <svg width="24" height="24">
                <use xlinkHref={sprite + '#phone-call'}></use>
              </svg>

              <Address>
                <ul>
                  <li>
                    <AddressLink to="tel:+86-878-9674-4455">
                      +86-878-9674-4455
                    </AddressLink>
                  </li>
                  <li>
                    <AddressLink to="tel:+84-78-2415-33">
                      +84-78-2415-33
                    </AddressLink>
                  </li>
                </ul>
              </Address>
            </ContactsWrapp>
            <SocialMediaList>
              <li>
                <Link
                  to="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialIcons width="24" height="24">
                    <use xlinkHref={sprite + '#instagram'}></use>
                  </SocialIcons>
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialIcons width="24" height="24">
                    <use xlinkHref={sprite + '#facebook'}></use>
                  </SocialIcons>
                </Link>
              </li>
              <li>
                <Link
                  to="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialIcons width="24" height="24">
                    <use xlinkHref={sprite + '#twitter'}></use>
                  </SocialIcons>
                </Link>
              </li>
            </SocialMediaList>
        </HeaderContainer>
      </PageHeader>
    </>
  );
};
