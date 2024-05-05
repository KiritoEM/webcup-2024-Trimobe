import { useTranslation } from "react-i18next";
import FadeAnimation from "../../animations/FadeAnimations";

const LandingHero = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <section className="landing__hero">
      <div className="hero-content">
        <FadeAnimation direction="left">
          <a
            href="https://bff.ecoindex.fr/redirect/?url=https://trimobe.madagascar.webcup.hodi.host"
            target="_blank"
          >
            <img
              src="https://bff.ecoindex.fr/badge/?theme=dark&url=https://trimobe.madagascar.webcup.hodi.host"
              alt="Ecoindex Badge"
            />
          </a>
        </FadeAnimation>
        <FadeAnimation direction="bottom">
          <div className="title">
            <h1 dangerouslySetInnerHTML={{ __html: t("hero.title") }} />
          </div>
        </FadeAnimation>
        <FadeAnimation direction="right">
          <p>{t("hero.text")}</p>
        </FadeAnimation>
        <div className="input-group">
          <input type="text" placeholder="Que voulez-vous?" />
          <button>Envoyer</button>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
