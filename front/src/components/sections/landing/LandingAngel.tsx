/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, A11y } from "swiper/modules";
import { MutableRefObject, useRef } from "react";
import { angelData } from "../../../helpers/constants";
import AngelCard from "../../cards/AngelCard";
import FadeAnimation from "../../animations/FadeAnimations";

const LandingAngel = (): JSX.Element => {
  const swiperRef: MutableRefObject<any> = useRef(null);

  const prevSwiper = () => {
    swiperRef.current.slidePrev();
  };

  const nextSwiper = () => {
    swiperRef.current.slideNext();
  };

  const { t } = useTranslation();

  return (
    <section className="landing__angel">
      <div className="angel-content">
        <div className="header">
          <FadeAnimation direction="bottom">
            <h2>
              {t("angel.title")}
              <span> {t("angel.angel")}</span>
            </h2>
          </FadeAnimation>
          <div className="swiper-buttons">
            <FadeAnimation direction="right">
              <div className="left" onClick={() => prevSwiper()}>
                <img src="/chevron-left.webp" alt="" />
              </div>
            </FadeAnimation>
            <FadeAnimation direction="right">
              <div className="right" onClick={() => nextSwiper()}>
                <img src="/chevron-right.webp" alt="" />
              </div>
            </FadeAnimation>
          </div>
        </div>
        <div className="content">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={"auto"}
            spaceBetween={50}
            modules={[Pagination, Navigation, A11y]}
            className="mySwiper"
          >
            {angelData.map((item, index) => (
              <SwiperSlide key={index}>
                <FadeAnimation direction="bottom">
                  <AngelCard {...item} />
                </FadeAnimation>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default LandingAngel;
