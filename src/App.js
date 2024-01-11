import Header from './components/Header';
import Carrusel from './components/Carrusel';
import AboutUs from './components/AboutUs';
import WhyUs from './components/WhyUs';
import Footer from './components/Footer';
import Faq from './components/Faq';
import Intro from './components/Intro';
import Companies from './components/Companies';

function App() {
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Intro id="home" />
      <Carrusel />
      <AboutUs id="about" />
      <Companies/>
      <WhyUs id="whyus" />
      <Faq id="faq" />
      <Footer id="footer" />
    </div>
  );
}

export default App;

