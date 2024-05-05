import { useTranslation } from "react-i18next";
import { footerNav } from "../../../helpers/constants";
import FadeAnimation from "../../animations/FadeAnimations";
const LandingFooter = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <section className="landing__footer">
      <FadeAnimation direction="bottom">
        <h2>
          Restez serein. <br /> Rejoignez-nous
        </h2>
      </FadeAnimation>
      <FadeAnimation direction="bottom">
        <div className="footer-button">
          <button className="btn-dark"> Se connecter </button>
          <button className="btn-light"> Creer un compte </button>
        </div>
      </FadeAnimation>
      <div className="footer-nav">
        {footerNav.map((nav, index) => (
          <div className="nav-item" key={index}>
            <h4>{t(nav.title)}</h4>
            <ul>
              {nav.links.map((link, i) => (
                <li key={i}>{t(link)}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer-footer">
        <hr />
        <div className="footer-footer-content">
          <img src="/logo.webp" alt="logo" className="logo" />
          <p>By Team Trimobe - 24h by Webcup 2024</p>
          <div className="icon-social">
            <a href="">
              <img src="/icon-facebook.svg" alt="facebook" />
            </a>
            <a href="">
              <img src="/icon-linkedin.svg" alt="linkedin" />
            </a>
            <a href="">
              <img src="/icon-twitter.svg" alt="twitter" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingFooter;
