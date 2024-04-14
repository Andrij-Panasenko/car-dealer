import { Layout } from './SharedLayout.styled';
export const SharedLayout = ({ children }) => {
  return (
    <>
      <Layout>{children}</Layout>
    </>
  );
};
