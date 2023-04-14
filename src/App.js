import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Hire from "./components/Hire";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      
      <Services />
      <About />
      
      <Hire />
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
