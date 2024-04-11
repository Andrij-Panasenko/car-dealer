import sprite from "../../../assets/sprite.svg"
import { LowerHeader, Nav, NavList } from "./Navigation.styled";
import { Link } from 'react-router-dom';

export const Navigation = () => {
    return (
      <>
        <LowerHeader>
          <Nav>
            <NavList>
              <il>
                <Link href="/">Home</Link>
              </il>
              <il>
                <Link href="/">New models</Link>
              </il>
              <il>
                <Link href="/">Services</Link>
              </il>
              <il>
                <Link href="/">About us</Link>
              </il>
              <il>
                <Link href="/">News</Link>
              </il>
              <il>
                <Link href="/">Contacts</Link>
              </il>
            </NavList>
          </Nav>
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
      </>
    );
};
