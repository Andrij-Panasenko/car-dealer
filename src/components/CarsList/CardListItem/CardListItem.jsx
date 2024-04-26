import bankLogo from '../../../assets/bankLogo.png';
import sprite from '../../../assets/sprite.svg';
import tempImg from '../../../assets/Rectangle.png'; //temporary data
import {
  AddBtn,
  BoxOverlay,
  CarNameTittle,
  CarPrice,
  ContactBtn,
  HeadSetSvg,
  Img,
  ListItem,
  Overlay,
  RatingList,
  SocList,
  SocialIcon,
  Subsidy,
  SubsidyWrapper,
} from './CardListItem.styled';

import { BsFillStarFill as YellowStar } from 'react-icons/bs';
import { BsFillStarFill as GreyStar } from 'react-icons/bs';

export const CardListItem = ({ data }) => {
  const { make, rating } = data;

  const Rating = ({ car_rating }) => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < car_rating) {
        stars.push(
          <li key={i}>
            <YellowStar
              style={{
                color: '#ffc531',
              }}
            />
          </li>
        );
      } else {
        stars.push(
          <li key={i}>
            <GreyStar
              style={{
                color: '#f2f4f7',
              }}
            />
          </li>
        );
      }
    }

    return <RatingList>{stars}</RatingList>;
  };

  return (
    <ListItem>
      <BoxOverlay>
        <Img src={tempImg} alt="img" />
        <Overlay>
          <AddBtn>
            <svg width="27" height="27">
              <use xlinkHref={sprite + '#cart'}></use>
            </svg>
            Add to Cart
          </AddBtn>
          <ContactBtn>
            <HeadSetSvg width="27" height="27">
              <use xlinkHref={sprite + '#headset'}></use>
            </HeadSetSvg>
            Contact Seller
          </ContactBtn>
          <p>Social</p>
          <SocList>
            <li>
              <SocialIcon width="24" height="24">
                <use xlinkHref={sprite + '#instagram'}></use>
              </SocialIcon>
            </li>
            <li>
              <SocialIcon width="24" height="24">
                <use xlinkHref={sprite + '#facebook'}></use>
              </SocialIcon>
            </li>
            <li>
              <SocialIcon width="24" height="24">
                <use xlinkHref={sprite + '#twitter'}></use>
              </SocialIcon>
            </li>
          </SocList>
        </Overlay>
      </BoxOverlay>

      <CarNameTittle>{make}</CarNameTittle>
      <CarPrice>test car price</CarPrice>
      <Rating car_rating={rating} />
      <SubsidyWrapper>
        <Subsidy>Subsidy from</Subsidy>
        <a href="#">
          <img src={bankLogo} alt="Bank of America" />
        </a>
      </SubsidyWrapper>
    </ListItem>
  );
};
