import About from '@/components/About';
import Footer from '@/components/Footer';
import Intro from '@/components/Intro';
import Jobs from '@/components/Jobs';
import Navbar from '@/components/Navbar';
import Team from '@/components/Team';
import Values from '@/components/Values';
const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Intro />
        <About />
        <Team />
        <Values />
        <Jobs />
      </main>
      <Footer />
    </>
  );
};

export default App;
