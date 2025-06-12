import CompaniesLogo from "./CompaniesLogo";
import FaqAccordion from "./FAQ/FaqAccordion";
import FooterMain from "./Footer/FooterMain";
import Header from "./Header";
import Hero from "./Hero";
import Pricing from "./Pricing";
import ServiceMain from "./ServiceOne/ServiceMain";
import ServiceTwo from "./ServiceTwo";
import Testimonial from "./Testimonial";
import Trial from "./Trial";



function App() {
  return (
    <>
      <Header />
      <Hero />
      <CompaniesLogo/>
      <ServiceMain/>

      <ServiceTwo/>
      <Testimonial/>
      <Pricing/>
      <FaqAccordion/>
      <Trial/>
      <FooterMain/>
    </>
  );
}

export default App;
