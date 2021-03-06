import Designs from "./components/Designs";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar"
import Services from "./components/Services";
import Team from "./components/Team";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <div className="xl:px-[16vw] lg:px-20 md:px-12 px-14 ">
        <h1 className="text-3xl mb-10 mt-10 lg:mb-0 md:mt-20">We offer high <br /> demand services</h1>
      </div>
      <Services/>
      <Designs/>
      <Team/>
      <Footer/>
    </div>
  );
}

export default App;
