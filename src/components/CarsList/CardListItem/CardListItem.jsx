import bankLogo from '../../../assets/bankLogo.png';
import tempImg from '../../../assets/Rectangle.png'; //temporary data
import {
  BoxOverlay,
  CarNameTittle,
  CarPrice,
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
