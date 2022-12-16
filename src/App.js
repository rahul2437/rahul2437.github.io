import { useContext } from 'react';
import { ThemeContext } from './context/theme';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Contact from './components/Contact/Contact';
import Skills from './components/Skills/Skills';

function App() {

  const [{ themeName }] = useContext(ThemeContext);

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />
      <About />
      <Skills />
      <Contact />
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
