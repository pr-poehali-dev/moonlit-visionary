import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import PhotoGallery from "@/components/PhotoGallery";
import Promo from "@/components/Promo";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Featured />
      <PhotoGallery />
      <Promo />
      <Footer />
    </main>
  );
};

export default Index;