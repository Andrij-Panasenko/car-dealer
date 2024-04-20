import { CardListItem } from './CardListItem/CardListItem';
import { Divider, List, ListContainer, ListTittle, Section } from './CarsList.styled';

export const CarsList = () => {
  return (
    <>
      <Divider></Divider>
      <Section>
        <ListContainer>
          <ListTittle>New Car Model</ListTittle>
          <List>
            <CardListItem />
            <CardListItem />
            <CardListItem />
            <CardListItem />
            <CardListItem />
            <CardListItem />
            <CardListItem />
            <CardListItem />
          </List>
          <button type="button">View all Cars</button>
        </ListContainer>
      </Section>
    </>
  );
};
