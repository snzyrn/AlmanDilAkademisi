import React from "react";
import Image from "next/image";
import HeroImg from "../assets/hero-img.png";
import Arrow from "../assets/arrow.png";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-10 flex flex-row justify-center">
      <div className="w-2/3 lg:w-1/3 pl-12 2xl:w-1/4 lg:block">
        <h2 className="text-text font-medium text-5xl mb-5 mt-20 2xl:text-6xl">
          {t('hero.title')}
        </h2>
        <p className="text-text text-lg 2xl:text-2xl">
          {t('hero.description')}
        </p>
        <div className="flex flex-row">
          <button
            type="button"
            onClick={() => (window.location.href = "/contact")}
            className="inline-block mt-12 2xl:mt-24 rounded border-2 border-text px-6 pb-[6px] pt-2 font-medium leading-normal text-text transition duration-150 ease-in-out hover:border-neutral-800 hover:bg-light hover:text-neutral-800 focus:border-neutral-800 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none focus:ring-0 active:border-neutral-900 active:text-neutral-900 motion-reduce:transition-none"
          >
            {t('hero.contactButton')}
          </button>
          <Image
            src={Arrow}
            alt={t('hero.arrowAlt')}
            className="w-1/3 ml-12 mt-5 xl:w-1/5 2xl:mt-16 hidden lg:block"
          />
        </div>
      </div>
      <Image
        src={HeroImg}
        alt={t('hero.heroImgAlt')}
        className="w-1/2 ml-16 p-10 2xl:w-1/3 hidden lg:block"
      />
    </div>
  );
};

export default Hero;
