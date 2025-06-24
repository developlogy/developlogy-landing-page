// material-ui
import Divider from '@mui/material/Divider';

// project-imports
import Hero from 'sections/landing/Hero';
import Testimonial from 'sections/landing/Testimonial';
import ApproachSection from '../sections/landing/Approach';
import WhyChooseUs from '../sections/landing/WhyChooseUs';
import FaqSection from '../sections/landing/Faq';
import WebDesignTrends from '../sections/landing/WebDesignTrends';
import TechnologiesPage from '../sections/landing/Serivces';

// assets
import AuthBackground from '../assets/images/auth/AuthBackground';
import VisionSection from '../sections/landing/VisionSection';
import MissionSection from '../sections/landing/MissionSection';

// ==============================|| SAMPLE PAGE ||============================== //

export default function Landing() {
  return (
    <>
      <AuthBackground />
      <Hero />
      <TechnologiesPage />
      <ApproachSection />
      <WebDesignTrends />
      <VisionSection />
      <MissionSection />
      <WhyChooseUs />
      <FaqSection />
      <Testimonial />
      <Divider sx={{ borderColor: 'secondary.dark' }} />
    </>
  );
}
