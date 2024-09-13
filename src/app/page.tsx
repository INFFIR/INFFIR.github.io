import LenisWrapper from '../../components/lenis-wrapper/page';
import MainSection from '../../partials/main-section/page';
import LandingSection from '../../partials/landing-section/page';
import AboutSection from '../../partials/about-section/page';

const Page = () => {
  return (
    <LenisWrapper>
      <LandingSection />
      <MainSection />
      <AboutSection />
    </LenisWrapper>
  );
};

export default Page;
