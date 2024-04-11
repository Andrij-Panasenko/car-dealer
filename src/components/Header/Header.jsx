import sprite from '../../assets/sprite.svg';
import { Link } from 'react-router-dom';

import {
  Address,
  AddressLink,
  ContactsWrapp,
  Location,
  LocationWrapp,
  Logo,
  LowerHeader,
  PageHeader,
  SocialMediaList,
  UpperHeader,
} from './Header.styled';

export const Header = () => {
  return (
    <>
      <PageHeader>
        <UpperHeader>
          <Logo to="/">Car Vip</Logo>
          <LocationWrapp>
            <svg width="24" height="24">
              <use xlinkHref={sprite + '#map-pin'}></use>
            </svg>
            <Location>
              No. 35-37 Huynh Thuc Khang, Ben Nghe Ward, District 1, Ho Chi Minh
              City
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
                <svg width="24" height="24">
                  <use xlinkHref={sprite + '#instagram'}></use>
                </svg>
              </Link>
            </li>
            <li>
              <Link
                to="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="24" height="24">
                  <use xlinkHref={sprite + '#facebook'}></use>
                </svg>
              </Link>
            </li>
            <li>
              <Link
                to="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="24" height="24">
                  <use xlinkHref={sprite + '#twitter'}></use>
                </svg>
              </Link>
            </li>
          </SocialMediaList>
        </UpperHeader>
        <LowerHeader>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/">New models</Link>
            <Link href="/">SERVICES</Link>
            <Link href="/">ABOUT US</Link>
            <Link href="/">NEWS</Link>
            <Link href="/">CONTACT</Link>
          </nav>
          <button type="button">Contact Seller</button>
          <ul>
            <li>
              <p>Compare</p>
              <svg width="26" height="26">
                <use xlinkHref={sprite + '#diagram'}></use>
              </svg>
            </li>
            <li>
              <p>Cart</p>
              <svg width="26" height="26">
                <use xlinkHref={sprite + '#cart'}></use>
              </svg>
            </li>
          </ul>
        </LowerHeader>
      </PageHeader>
    </>
  );
};
