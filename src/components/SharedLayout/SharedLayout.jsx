import { GlobalStyles } from '../../styles/GlobalStyles';
export const SharedLayout = ({ children }) => {
  return (
    <>
      <div>{children}</div>
      <GlobalStyles />
    </>
  );
};
