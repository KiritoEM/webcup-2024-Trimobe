import { useTranslation } from "react-i18next";
import { IangelCard } from "../../utils/interfaces";

const AngelCard = ({ description, image, name }: IangelCard): JSX.Element => {
  const { t } = useTranslation();
  return (
    <article className="angel-card">
      <h2>{name}</h2>
      <img src={image} alt="" />
      <p>{t(description)}</p>
    </article>
  );
};

export default AngelCard;
