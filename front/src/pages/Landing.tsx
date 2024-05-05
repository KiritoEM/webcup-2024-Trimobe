import LandingLayout from "../components/layouts/LandingLayout";
import LandingAbout from "../components/sections/landing/LandingAbout";
import LandingAngel from "../components/sections/landing/LandingAngel";
import LandingHero from "../components/sections/landing/LandingHero";
import LandingTarif from "../components/sections/landing/LandingTarif";
import ChabotContainer from "../components/chat-bot/ChatBotContainer";
import LandingFooter from "../components/sections/landing/LandingFooter";
import { brandsData } from "../helpers/constants";
const Landing = (): JSX.Element => {
  return (
    <section className="landing">
      <LandingLayout>
        <ChabotContainer />
        <LandingHero />
        <div className="brands">
          <div className="brands__container">
            {brandsData.map((icon, index) => (
              <img key={index} src={icon} alt="" />
            ))}
          </div>
        </div>
        <LandingAbout />
        <LandingAngel />
        <LandingTarif />
        <LandingFooter />
      </LandingLayout>
    </section>
  );
};

export default Landing;
