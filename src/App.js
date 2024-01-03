import Header from './components/Header';
import Carrusel from './components/Carrusel';
import AboutUs from './components/AboutUs';
import WhyUs from './components/WhyUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Carrusel id="home"/>
      <AboutUs id="about"/>
      <WhyUs id="whyus"/>
      <Footer id="footer"/>
    </div>
  );
}

export default App;
