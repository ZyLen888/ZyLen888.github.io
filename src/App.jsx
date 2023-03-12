import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Connect,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Footer,
} from "./components";
const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Connect />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
