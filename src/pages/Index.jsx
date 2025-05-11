import Layout from '../components/layout/Layout.jsx';
import HeroSection from '../components/home/HeroSection.jsx';
import FeaturesSection from '../components/home/FeaturesSection.jsx';
import CategorySection from '../components/home/CategorySection.jsx';
import ContactCta from '../components/home/ContactCta.jsx';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
      <div className="border-t border-gray-200 mt-12 mb-6" />
      <CategorySection />
      <ContactCta />
    </Layout>
  );
};

export default Index;
