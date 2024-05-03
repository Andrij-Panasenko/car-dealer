import sprite from '../../assets/sprite.svg';
import placeholder from '../../assets/avatar-placeholder.png';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import {
  Section,
  Avatar,
  Name,
  Position,
  Rating,
  Review,
  Svg,
  Testimonial,
  SectionContainer,
  SectionWrapp,
} from './Testimonials.styled';

export const Testimonials = () => {
  return (
    <Section>
      <SectionWrapp id="testimonals">
        <SectionTitle title="Testimonials" />
        <SectionContainer>
          <Testimonial>
            <Avatar src={placeholder} alt="User avatar" />
            <Svg width="55" height="44">
              <use xlinkHref={sprite + '#apostroph'}></use>
            </Svg>
            <Review>
              "CarVIP's service is really excellent, I bought a car that I like.
              The service attitude of the staff here is also great. I will come
              back to buy!"
            </Review>
            <Rating></Rating>
            <Name>John Doe</Name>
            <Position>Trans Cosmos Sales Director</Position>
          </Testimonial>

          <Testimonial>
            <Avatar src={placeholder} alt="User avatar" />
            <Svg width="55" height="44">
              <use xlinkHref={sprite + '#apostroph'}></use>
            </Svg>
            <Review>
              "CarVIP's service is really excellent, I bought a car that I like.
              The service attitude of the staff here is also great. I will come
              back to buy!"
            </Review>
            <Rating></Rating>
            <Name>Bom Pak</Name>
            <Position>Tourist manager</Position>
          </Testimonial>
        </SectionContainer>
      </SectionWrapp>
    </Section>
  );
};
