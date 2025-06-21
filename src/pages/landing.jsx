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

// ==============================|| SAMPLE PAGE ||============================== //

export default function Landing() {
  return (
    <>
      <Hero />
      {/* Technologies & Services Page */}
      <TechnologiesPage />
      <ApproachSection />
      <WebDesignTrends />
      <WhyChooseUs />
      <FaqSection />
      <Testimonial />
      <Divider sx={{ borderColor: 'secondary.light' }} />
    </>
  );
}
