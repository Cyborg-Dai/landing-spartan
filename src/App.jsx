import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Fondo from "./assets/Fondo.jpg"

function App() {

  const bgIMagen = {
    backgroundImage: `url(${Fondo})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
    position: 'relative',
    
  }

  return (
    <div style={bgIMagen} className="min-h-screen h-screen overflow-y-auto snap-y snap-mandatory">
     <Navbar/>
     <Hero/>
     <About/>
     <Contact/>
    </div>
  );
}

export default App
