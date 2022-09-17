import About from '@/components/About';
import Intro from '@/components/Intro';
import Navbar from '@/components/Navbar';
const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Intro />
        <About />
      </main>
      <footer>footer todo</footer>
    </>
  );
};

export default App;
