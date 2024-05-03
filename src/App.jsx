import { CarsList } from './components/CarsList/CarsList';
import { ContactUs } from './components/ContactUs/ContactUs';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Navigation } from './components/Header/Navigation/Navigation';
import { Hero } from './components/Hero/Hero';
import { Partners } from './components/Partners/Partners';
import { ReadyToSupport } from './components/ReadyToSupport/ReadyToSupport';
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
          <Navigation/>
          <Hero />
          <SearchForm />
          <CarsList />
          <ContactUs />
          <Testimonials />
          <Partners />
          <StaticGallery />
          <ReadyToSupport />
        </SharedLayout>
      </main>
      <Footer />
    </>
  );
}
