import bankLogo from '../../../assets/bankLogo.png';
import sprite from "../../../assets/sprite.svg"
import tempImg from '../../../assets/Rectangle.png';//temporary data
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
  Subsidy,
  SubsidyWrapper,
} from './CardListItem.styled';

export const CardListItem = () => {
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
          {/* <ul>
            <li>
              <svg>
                <use></use>
              </svg>
            </li>
            <li>
              <svg>
                <use></use>
              </svg>
            </li>
            <li>
              <svg>
                <use></use>
              </svg>
            </li>
          </ul> */}
          <p>overlay</p>
        </Overlay>
      </BoxOverlay>

      <CarNameTittle>Test car name</CarNameTittle>
      <CarPrice>test car price</CarPrice>
      <ul></ul>
      <SubsidyWrapper>
        <Subsidy>Subsidy from</Subsidy>
        <a href="#">
          <img src={bankLogo} alt="Bank of America" />
        </a>
      </SubsidyWrapper>
    </ListItem>
  );
};
