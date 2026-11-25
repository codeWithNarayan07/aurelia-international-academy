import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./sections/Home";
import About from "./sections/About";
import Academics from "./sections/Academics";
import Facilities from "./sections/Facilities";
import Gallery from "./sections/Gallery";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Home />
        <About />
        <Academics />
        <Facilities />
        <Gallery />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
