import { useTranslation } from "react-i18next";
import { navList } from "../../helpers/constants";
import { useNav } from "../../hooks/useNav";
import { Fragment } from "react/jsx-runtime";
import { useNavigate } from "react-router-dom";
import i18n from "i18next";
import { useState } from "react";

const LandingNavbar = (): JSX.Element => {
  const { openMenu } = useNav();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [lang, setLang] = useState<string>("en");

  const changelangue = () => {
    if (lang === "fr") {
      i18n.changeLanguage("en");
      setLang("en");
    } else {
      i18n.changeLanguage("fr");
      setLang("fr");
    }
  };

  return (
    <Fragment>
      <nav className={`landing-navbar ${openMenu && "open-nav-responsive"}`}>
        <div className="landing-navbar__container">
          {/* section1 */}
          <div className="nav-section1">
            <ul>
              {navList.navSection01.map((item, index) => (
                <li key={index}>
                  <a href="">{t(item.key)}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* logo */}
          <div className="logo">
            <img src="/logo.webp" alt="" />
          </div>

          {/* section2 */}
          <div className="nav-section2">
            <ul>
              <li>
                {lang === "fr" ? (
                  <img src="/fr.svg" alt="" />
                ) : (
                  <img src="/en.webp" alt="" />
                )}
                {lang}
                <img src="/inverse.webp" alt="" onClick={() => changelangue()} />
              </li>
              <li>
                <a href="">{t("nav02.FAQ")}</a>
              </li>
              <li>
                <button className="btn" onClick={() => navigate("/login")}>
                  {t("nav02.button")}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default LandingNavbar;
