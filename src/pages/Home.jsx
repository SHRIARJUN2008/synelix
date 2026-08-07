import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import FeatureCards from "../components/FeatureCards";
import AIDemo from "../components/AIDemo";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <Features />

      <HowItWorks />

      <FeatureCards />

      <AIDemo />

      <Testimonials />

      <CTA />

      <Footer />
    </>
  );
}

export default Home;