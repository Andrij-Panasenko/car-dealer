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
            Free consultation on appropriate purchase and sale value
          </ListItem>
          <ListItem>
            Combine preferential loan packages for customers who buy your car
          </ListItem>
          <ListItem>Quickly resolve liquidation documents</ListItem>
          <ListItem>100% quick money transfer when the car is sold</ListItem>
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
