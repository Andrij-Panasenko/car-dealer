import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { SearchForm } from './components/SearchForm/SearchForm';
import { SharedLayout } from './components/SharedLayout/SharedLayout';
import "./index.css"

export default function App() {
  // fetch('http://localhost:3000/api/cars').then((i) => console.log(i));
  return (
    <>
      <Header />
      <SharedLayout>
        <main>
          <Hero />
          <SearchForm/>
        </main>
      </SharedLayout>
      <footer></footer>
    </>
  );
}
