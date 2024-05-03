import { Link } from 'react-router-dom';
import apple from '../../assets/apple.png';
import google from '../../assets/google.png';
import { SectionTitle } from '../SectionTitle/SectionTitle.jsx';
import {
  BottomMenu,
  Business,
  BusinessLink,
  CarVip,
  Copyright,
  DayWeek,
  Here,
  Section,
  SectionWrapp,
  StorWrap,
  Studio,
  SubText,
  Title,
  Wrapp,
} from './ReadyToSupport.styled.jsx';

export const ReadyToSupport = () => {
  return (
    <Section>
      <SectionWrapp>
        <SectionTitle title="We are ready to support" />
        <Wrapp>
          <div>
            <Title>Call us 1800 8192</Title>
            <SubText>
              For advice on car loans <br /> <DayWeek>Mon-Fri:</DayWeek>{' '}
              8am-6pm, <DayWeek>Sat:</DayWeek>
              8am-12pm
            </SubText>
          </div>
          <div>
            <Title>Direct support</Title>
            <SubText>
              Find the branch and transaction office closest to you&nbsp;
              <Here>here</Here>
            </SubText>
          </div>
          <div>
            <Title>Buy and sell quickly with the app Mobile App:</Title>
            <StorWrap>
              <Link to="https://play.google.com/store/games">
                <img src={google} alt="link to google play" />
              </Link>
              <Link to="https://apps.apple.com/ru/developer/apple/id284417353?mt=12">
                <img src={apple} alt="link to appstore" />
              </Link>
            </StorWrap>
          </div>
        </Wrapp>
        <BottomMenu>
          <Business>
            <BusinessLink>Branch System</BusinessLink>
            <BusinessLink>Terms of use</BusinessLink>
            <BusinessLink>Safety and security</BusinessLink>
          </Business>
          <Copyright>
            &copy; Copyright 2023 by <CarVip>CarVIP</CarVip>. Design by{' '}
            <Studio>Alena Studio</Studio> with love
          </Copyright>
        </BottomMenu>
      </SectionWrapp>
    </Section>
  );
};
