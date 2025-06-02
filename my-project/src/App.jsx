import CompaniesLogo from "./CompaniesLogo";
import Header from "./Header";
import Hero from "./Hero";
import Pricing from "./Pricing";
import ServiceMain from "./ServiceOne/ServiceMain";
import ServiceTwo from "./ServiceTwo";
import Testimonial from "./Testimonial";



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
    </>
  );
}

export default App;
