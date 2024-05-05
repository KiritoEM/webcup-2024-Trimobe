/* eslint-disable @typescript-eslint/no-unused-vars */
import { useTranslation } from "react-i18next";
import { aboutData } from "../../../helpers/constants";
import AboutCard from "../../cards/AboutCard";
import FadeAnimation from "../../animations/FadeAnimations";

const LandingAbout = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <section className="landing__about">
      <div className="about-content">
        <FadeAnimation direction="left">
          <div className="header">
            <h2 dangerouslySetInnerHTML={{ __html: t("about.title") }} />
          </div>
        </FadeAnimation>
        <div className="row gy-5 gx-4">
          {aboutData.map((item, index) => (
            <div key={index} className={item.col_indice}>
              <FadeAnimation direction="left">
                <AboutCard {...item} />
              </FadeAnimation>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingAbout;
