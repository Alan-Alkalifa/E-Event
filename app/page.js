import Address from "./component/Address";
import Contact from "./component/Contact";
import Content from "./component/Content";
import Deals from "./component/Deals";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import { Navbar } from "./component/Navbar";
import "./globals.css";


const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar/>
      <Hero/>
      <Contact/>
      <Content/>
      <Deals/>
      <Address/>
      <Footer/>
    </main>
  );
}

export default Home