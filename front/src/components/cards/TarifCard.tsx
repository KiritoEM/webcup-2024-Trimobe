import { useTranslation } from "react-i18next";
import { ItarifCard } from "../../utils/interfaces";

const TarifCard = ({
  button,
  engagement,
  price,
  subtitle,
  text,
  id,
}: ItarifCard): JSX.Element => {
  const { t } = useTranslation();

  return (
    <article className="tarif-card" id={id}>
      <div className="details">
        <div className="details-one">
          <h2 dangerouslySetInnerHTML={{ __html: t(subtitle) }} />
          <p dangerouslySetInnerHTML={{ __html: t(text) }} />
        </div>
        <hr />
        <div className="price">
          <h3>
            Ar {price}K <span>/mois</span>
          </h3>
          <p dangerouslySetInnerHTML={{ __html: t(engagement) }} />
        </div>
      </div>
      <button className="btn">{t(button)}</button>
    </article>
  );
};

export default TarifCard;
