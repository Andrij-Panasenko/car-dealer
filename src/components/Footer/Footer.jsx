import footerBg from '../../assets/footer-bg.jpg';
import footerBg2x from '../../assets/footer-bg-2x.jpg';
import { FooterWrapp } from './Footer.styled';

export const Footer = () => {
  return (
    <footer>
      <FooterWrapp>
        <picture>
          <source srcSet={`${footerBg} 1x, ${footerBg2x} 2x`} />
          <img src={footerBg} alt="Background" />
        </picture>
      </FooterWrapp>
    </footer>
  );
};
