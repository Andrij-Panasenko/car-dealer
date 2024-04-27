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
} from './ContactUs.styled';

const IconCheck = (
  <svg width="24" height="24">
    <use xlinkHref={sprite + '#check'}></use>
  </svg>
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
            {IconCheck}
            Free consultation on appropriate purchase and sale value
          </ListItem>
          <ListItem>
            {IconCheck}
            Combine preferential loan packages for customers who buy your car
          </ListItem>
          <ListItem>
            {IconCheck}Quickly resolve liquidation documents</ListItem>
          <ListItem>
            {IconCheck}100% quick money transfer when the car is sold</ListItem>
          <Btn type="button">
            <Icon width="24" height="24">
              <use xlinkHref={sprite + '#headset'}></use>
            </Icon>
            Contact Sellers
          </Btn>
        </Benefits>
        <CarBg></CarBg>
      </BenefitWrapper>
    </section>
  );
};
