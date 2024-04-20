import { CarsList } from './components/CarsList/CarsList';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { SearchForm } from './components/SearchForm/SearchForm';
import { SharedLayout } from './components/SharedLayout/SharedLayout';
import './index.css';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <SharedLayout>
          <Hero />
          <SearchForm />
          <CarsList/>
        </SharedLayout>
      </main>
      <footer></footer>
    </>
  );
}
