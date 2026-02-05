import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import VideoShowcase from "@/components/VideoShowcase";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import Comparison from "@/components/Comparison";
import Blog from "@/components/Blog";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <VideoShowcase />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Process />
      <Comparison />
      <Blog />
      <FAQ />
      <Contact />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
