import { useContext } from 'react';
import { ThemeContext } from './context/theme';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Contact from './components/Contact/Contact';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Github from './components/Github/Github';
import './App.css';

function App() {

  const [{ themeName }] = useContext(ThemeContext);

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />
      <main className='main'>
        <About />
        <Skills />
        <Github />
        <Projects />
        <Contact />
        <ScrollToTop />
        <Footer />
      </main>
    </div>
  );
}

export default App;
