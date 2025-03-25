import Header from './components/header';
import Banner from './components/banner';
import Footer from './components/footer';
import SecaoCategories from './components/secao_categories';
import Livros from './components/secao_livros';
import Lancamentos from './components/secao_lancamentos';

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Livros />
      <SecaoCategories /> 
      <Lancamentos />
      <Footer />

    </div>
  );
}