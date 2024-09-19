import LenisWrapper from '../../components/lenis-wrapper/page';
import MainSection from '../../partials/main-section/page';
import LandingSection from '../../partials/landing-section/page';
import AboutSection from '../../partials/about-section/page';
import BottomSection from '../../partials/bottom-section/page';
import './globals.css';

const Page = () => {
  return (
    <LenisWrapper>
      <LandingSection />
      <MainSection />
      <AboutSection />
      <BottomSection/>
    </LenisWrapper>
  );
};

export default Page;
