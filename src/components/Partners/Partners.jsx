import { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

import { getOurCustomers } from '../../api';
import { SectionTitle } from '../SectionTitle/SectionTitle.jsx';
import { Img, Section, SectionWrapper } from './Partners.styled.jsx';

export const Partners = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const getPartners = async () => {
      try {
        const data = await getOurCustomers();
        setCustomers(data);
        return data;
      } catch (error) {
        console.log(error, 'Unable to reach customers');
      }
    };
    getPartners();
  }, []);

  return (
    <Section>
      <SectionWrapper>
        <SectionTitle title="Our Partners" />
        <Swiper
          modules={[Navigation, A11y]}
          navigation
          spaceBetween={53}
          slidesPerView={6}
        >
          {customers.map((item) => (
            <SwiperSlide
              key={item.asset_id}
            >
              <Img src={item.secure_url} alt={item.public_id} />
            </SwiperSlide>
          ))}
        </Swiper>
      </SectionWrapper>
    </Section>
  );
};
