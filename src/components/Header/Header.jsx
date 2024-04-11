import { Link } from 'react-router-dom';
import sprite from '../../assets/sprite.svg';

export const Header = () => {
  return (
    <>
      <header>
        <Link to="/">logo</Link>
        <div>
          <svg width="24" height="24">
            <use xlinkHref={sprite + '#map-pin'}></use>
          </svg>
          <p>
            No. 35-37 Huynh Thuc Khang, Ben Nghe Ward, District 1, Ho Chi Minh
            City
          </p>
        </div>
        <div>
          <svg width="24" height="24">
            <use xlinkHref={sprite + '#phone-call'}></use>
          </svg>

          <p>Hotline</p>

          <address>
            <ul>
              <li>
                <Link to="tel:+86-878-9674-4455">+86-878-9674-4455</Link>
              </li>
              <li>
                <Link to="tel:+84-78-2415-33">+84-78-2415-33</Link>
              </li>
            </ul>
          </address>
        </div>
        <ul>
          <li>
            <svg width="24" height="24">
              <use xlinkHref={sprite + '#instagram'}></use>
            </svg>
          </li>
          <li>
            <svg width="24" height="24">
              <use xlinkHref={sprite + '#facebook'}></use>
            </svg>
          </li>
          <li>
            <svg width="24" height="24">
              <use xlinkHref={sprite + '#twitter'}></use>
            </svg>
          </li>
        </ul>
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
      </header>
    </>
  );
};
