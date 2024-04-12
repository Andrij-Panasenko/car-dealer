import { Header } from "./components/Header/Header";
import { Navigation } from "./components/Header/Navigation/Navigation";
import { Hero } from "./components/Hero/Hero";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";

export default function App() {

  // fetch('http://localhost:3000/api/cars').then((i) => console.log(i));
  return (
    <>
      <SharedLayout>
        <Header />
        <Navigation />
        <main>
          <Hero/>
        </main>
        <footer></footer>
      </SharedLayout>
    </>
  );
}
