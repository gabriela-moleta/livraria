import Header from './components/header';
import Banner from './components/banner';
import Footer from './components/footer';
import SecaoCategories from './components/secao_categories';
import Livros from './components/secao_livros';

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Livros />
      <SecaoCategories /> 
      <Footer />

    </div>
  );
}