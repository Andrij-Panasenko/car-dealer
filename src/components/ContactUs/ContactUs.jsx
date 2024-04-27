import sprite from '../../assets/sprite.svg';
import {
  Title,
  Action,
  Benefits,
  Btn,
  Icon,
  ListItem,
  BenefitWrapper,
  CarBg,
  Check,
} from './ContactUs.styled';

const IcoCheck = (
  <Check width="24" height="24">
    <use xlinkHref={sprite + '#check'}></use>
  </Check>
);

export const ContactUs = () => {
  return (
    <section>
      <BenefitWrapper>
        <Title>Do you need to sell a car?</Title>
        <Action>
          Just contact us, give us information about your car, we will help you:
        </Action>
        <Benefits>
          <ListItem>
            {IcoCheck}
            <p> Free consultation on appropriate purchase and sale value</p>
          </ListItem>
          <ListItem>
            {IcoCheck}
            <p>
              Combine preferential loan packages for customers who buy your car
            </p>
          </ListItem>
          <ListItem>
            {IcoCheck}
            <p>Quickly resolve liquidation documents</p>
          </ListItem>
          <ListItem>
            {IcoCheck}
            <p>100% quick money transfer when the car is sold</p>
          </ListItem>
        </Benefits>
        <Btn type="button">
          <Icon width="24" height="24">
            <use xlinkHref={sprite + '#headset'}></use>
          </Icon>
          Contact Sellers
        </Btn>
        <CarBg></CarBg>
      </BenefitWrapper>
    </section>
  );
};
