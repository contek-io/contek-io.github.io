import About from '@/components/About';
import Intro from '@/components/Intro';
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
      </main>
      <footer>footer todo</footer>
    </>
  );
};

export default App;
