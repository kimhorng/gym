import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HappyMember from "./components/HappyMember";
import Banner from "./components/Home";
import MoreThanGym from "./components/Benefit";
import Navbar from "./components/Navbar";
import OurClass from "./components/OurClass";
import Sponsor from "./components/Sponsor";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Sponsor />
      <MoreThanGym />
      <HappyMember />
      <OurClass />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
