import React from 'react';
import { Layout } from 'antd';
import SectionSobreJoao from '../components/SobreJoao/SectionSobreJoao';
import HeaderSection from '../components/HeaderSection';
import { useTheme } from '../theme/colorConfig';
import HeroSection from '../components/HeroSection/HeroSection';
import CourseOverviewSection from '../components/CourseOverviewSection/CourseOverviewSection';
import SocialProofSection from '../components/SocialProof/SocialProofSection';
import OfferSection from '../components/Offer/OfferSection';
import CallToAction from '../components/CallToAction/CallToActionSection';
import QuestionSection from '../components/Question/QuestionSection';
import LeadsSection from '../components/Leads/LeadsSection';
import Footer from '../components/Footer/Footer';

const { Header } = Layout;

// Page: LandingPage
const LandingPage: React.FC = () => {
  const theme = useTheme();

  return (
    <div>
    {/* Header fixo no topo */}
    <HeaderSection />
    {/* Conteúdo das seções */}
    <main>
      <HeroSection />
      <SectionSobreJoao />
      <CourseOverviewSection/>
      <SocialProofSection/>
      <OfferSection/>
      <CallToAction/>
      <QuestionSection/>
      <LeadsSection/>
      <Footer/>
    </main>
  </div>
  );
};

export default LandingPage;