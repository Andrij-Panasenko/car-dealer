import { CarsList } from './components/CarsList/CarsList';
import { ContactUs } from './components/ContactUs/ContactUs';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Partners } from './components/Partners/Partners';
import { SearchForm } from './components/SearchForm/SearchForm';
import { SharedLayout } from './components/SharedLayout/SharedLayout';
import { StaticGallery } from './components/StaticGallery/StaticGallery';
import { Testimonials } from './components/Testimonials/Testimonials';
import './index.css';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <SharedLayout>
          <Hero />
          <SearchForm />
          <CarsList />
          <ContactUs />
          <Testimonials />
          <Partners />
          <StaticGallery/>
        </SharedLayout>
      </main>
      <footer></footer>
    </>
  );
}
