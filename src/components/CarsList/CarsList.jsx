import { useEffect, useState } from 'react';
import { CardListItem } from './CardListItem/CardListItem';
import { Divider, List, ListContainer, ListTittle, Section } from './CarsList.styled';
import { getCarsItem } from "../../api"

export const CarsList = () => {
const [carsItem, setCarsItem] = useState([])

  useEffect(() => {
    const fetch = async () => {
      const data = await getCarsItem();
      setCarsItem(data);
      return data
    }
    fetch()
  }, [])
  

  return (
    <>
      <Divider></Divider>
      <Section>
        <ListContainer>
          <ListTittle>New Car Model</ListTittle>
          <List>
            {carsItem.map((item) => (
              <CardListItem key={item._id} data={item} />
            ))}
          </List>
          <button hidden type="button">View all Cars</button>
        </ListContainer>
      </Section>
    </>
  );
};
