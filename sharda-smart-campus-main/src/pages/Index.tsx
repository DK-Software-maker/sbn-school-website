import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import QuickInfoCards from "@/components/home/QuickInfoCards";
import AboutPreview from "@/components/home/AboutPreview";
import PrincipalMessage from "@/components/home/PrincipalMessage";
import Counters from "@/components/home/Counters";
import NewsEvents from "@/components/home/NewsEvents";
import GalleryPreview from "@/components/home/GalleryPreview";
import ContactPreview from "@/components/home/ContactPreview";

const Index = () => (
  <Layout>
    <HeroSection />
    <QuickInfoCards />
    <AboutPreview />
    <PrincipalMessage />
    <Counters />
    <NewsEvents />
    <GalleryPreview />
    <ContactPreview />
  </Layout>
);

export default Index;
