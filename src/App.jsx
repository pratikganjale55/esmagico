import "./App.css";
import CustomerSays from "./components/CustomerSays/CustomerSays";
import EMI from "./components/EMI/EMI";
import FAQ from "./components/FAQ/FAQ";
import FastProcess from "./components/FastProcess/FastProcess";
import Hero from "./components/Hero/Hero";
import Loan from "./components/Loan/Loan";
import Navbar from "./components/Navbar/Navbar";
import Partners from "./components/Partners/Partners";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Loan/>
      <Partners/>
      <FastProcess/>
      <CustomerSays/>
      <EMI/>
      <FAQ/>
      <Footer/>
    </>
  );
}

export default App;
