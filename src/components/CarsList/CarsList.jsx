import { useEffect, useState } from 'react';
import { CardListItem } from './CardListItem/CardListItem';
import {
  Divider,
  List,
  ListContainer,
  Section,
  ShowMore,
} from './CarsList.styled';
import { getCarsItem } from '../../api';
import { SectionTitle } from '../SectionTitle/SectionTitle';

export const CarsList = () => {
  const [carsItem, setCarsItem] = useState([]);
  const [count, setCount] = useState(0);
  const [visibleCars, setVisibleCars] = useState(8);

  const handleShowMore = () => {
    setVisibleCars((prev) => prev + 8);
  };

  useEffect(() => {
    const fetch = async () => {
      const data = await getCarsItem(visibleCars);
      setCarsItem(data.carsInfo);
      setCount(data.count);
    };
    fetch();
  }, [visibleCars]);

  return (
    <>
      <Divider></Divider>
      <Section>
        <ListContainer id="new-models">
          <SectionTitle title="New Car Model" />
          <List>
            {carsItem.map((item) => (
              <CardListItem key={item._id} data={item} />
            ))}
          </List>
          {visibleCars <= count && (
            <ShowMore onClick={handleShowMore} type="button">
              View all Cars
            </ShowMore>
          )}
        </ListContainer>
      </Section>
    </>
  );
};
