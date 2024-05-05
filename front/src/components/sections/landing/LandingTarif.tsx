import { useTranslation } from "react-i18next";
import { tarifData } from "../../../helpers/constants";
import TarifCard from "../../cards/TarifCard";
import FlipAnimation from "../../animations/FlipAnimation";

const LandingTarif = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <section className="landing__tarif">
      <div className="tarif-content">
        <div className="header">
          <FlipAnimation direction="center">
            <h2 dangerouslySetInnerHTML={{ __html: t("tarif.title") }} />
          </FlipAnimation>
        </div>
        <div className="content">
          <div className="row">
            {tarifData.map((tarif, index) => (
              <div className="col" key={index}>
                <FlipAnimation direction="center">
                  <TarifCard {...tarif} />
                </FlipAnimation>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingTarif;
