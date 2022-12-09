import Header from "./components/Header";
import Hero from "./components/Hero";
import Movies from "./components/Movies";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
     <Header />
     <Hero />
     <Movies />
    </div>
  );
}

export default App;
