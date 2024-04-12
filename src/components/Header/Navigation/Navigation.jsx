import sprite from "../../../assets/sprite.svg"
import { ContactSell, CustomerCorner, LowerHeader, Nav, NavContainer, NavigationLink, NavList } from "./Navigation.styled";

export const Navigation = () => {
    return (
      <>
        <LowerHeader>
          <NavContainer>
            <Nav>
              <NavList>
                <il>
                  <NavigationLink href="/">Home</NavigationLink>
                </il>
                <il>
                  <NavigationLink href="/">New models</NavigationLink>
                </il>
                <il>
                  <NavigationLink href="/">Services</NavigationLink>
                </il>
                <il>
                  <NavigationLink href="/">About us</NavigationLink>
                </il>
                <il>
                  <NavigationLink href="/">News</NavigationLink>
                </il>
                <il>
                  <NavigationLink href="/">Contacts</NavigationLink>
                </il>
              </NavList>
            </Nav>
            <ContactSell type="button">Contact Seller</ContactSell>
            <CustomerCorner>
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
            </CustomerCorner>
          </NavContainer>
        </LowerHeader>
      </>
    );
};
