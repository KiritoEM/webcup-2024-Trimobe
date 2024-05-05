import { useTranslation } from "react-i18next";
import { IaboutCard } from "../../utils/interfaces";
import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";

const AboutCard = ({ image, text, subtitle, id }: IaboutCard): JSX.Element => {
  const { t } = useTranslation();
  return (
    <article
      className="about-card"
      // style={{ backgroundImage: `url(${image})`}}
      id={id}
    >
      <DotLottiePlayer
        autoplay={true}
        loop={true}
        src={`${image}`}
        style={{ width: "100%", height: "16em", objectFit: "cover" }}
      />
      <div className="content">
        <h4>{t(subtitle)}</h4>
        <p>{t(text)}</p>
      </div>
    </article>
  );
};

export default AboutCard;
