// material-ui
import Divider from '@mui/material/Divider';

// project-imports
import Hero from 'sections/landing/Hero';
import Combo from 'sections/landing/Combo';
import FigmaBlock from 'sections/landing/FigmaBlock';
import Apps from 'sections/landing/Apps';
import Free from 'sections/landing/Free';
import Testimonial from 'sections/landing/Testimonial';
import Partner from 'sections/landing/Partner';
import Subscribe from 'sections/landing/Subscribe';
import ApproachSection from '../sections/landing/Approach';
import WhyChooseUs from '../sections/landing/WhyChooseUs';
import FaqSection from '../sections/landing/Faq';
import WebDesignTrends from '../sections/landing/WebDesignTrends';

// ==============================|| SAMPLE PAGE ||============================== //

export default function Landing() {
  return (
    <>
      <Hero />
      <ApproachSection />
      <WebDesignTrends />
      <WhyChooseUs />
      <FaqSection />
      <Testimonial />
      {/* <Combo />
      <FigmaBlock />
      <Apps />
      <Free />
      <Partner />
      <Subscribe /> */}
      <Divider sx={{ borderColor: 'secondary.light' }} />
    </>
  );
}
