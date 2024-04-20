import { CardListItem } from './CardListItem/CardListItem';
import { Divider } from './CarsList.styled';

export const CarsList = () => {
  return (
    <>
      <Divider></Divider>

      <ul>
        <CardListItem />
        <CardListItem />
        <CardListItem />
        <CardListItem />
        <CardListItem />
        <CardListItem />
        <CardListItem />
        <CardListItem />
          </ul>
          <button type="button">View all Cars</button>
    </>
  );
};
