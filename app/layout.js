import "./globals.css";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import Deals from "@/components/Deals";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Content from "@/components/Content";
import Address from "@/components/Address";


export const metadata = {
  title: "E-Event",
  description: "Search Any Eveny that you want here!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='bg-slate-100'>
      <body>
      <Navbar/>
      <Hero/>
      <Contact/>
      <Content/>
      <Deals/>
      <Address/>
      <Footer/>
      </body>
    </html>
  );
}
