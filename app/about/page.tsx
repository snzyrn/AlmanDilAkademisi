"use client";

import React from "react";
import Image from "next/image";
import About from "../../assets/about2.png";
import About2 from "../../assets/about3.png";
import FadeUp from "@/components/FadeUp";
import { FaRegCheckCircle } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Page = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <FadeUp className="relative w-full h-72">
        <Image
          src={About}
          alt={t('aboutPage.heroImageAlt')}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <h1 className="text-white text-3xl font-normal">{t('aboutPage.title')}</h1>
        </div>
      </FadeUp>
      <main className="flex-grow p-4">
        <div className="text-gray-500 text-lg 2xl:text-xl text-center mt-10 px-24">
          <p>{t('aboutPage.description')}</p>
        </div>
        <div className="flex flex-row items-center justify-center mt-28 mb-24 gap-5">
          <div className="w-1/2">
            <h2 className="font-medium text-3xl">{t('aboutPage.whyUs.title')}</h2>
            <p className="text-gray-500 text-lg 2xl:text-xl">
              {t('aboutPage.whyUs.description')}
            </p>
            <div className="flex flex-row items-center justify-start gap-5 mt-2">
              <FaRegCheckCircle className="text-green text-3xl" />
              <p className="text-gray-500 ">
                <span className="font-medium">{t('aboutPage.whyUs.expertTeam.label')}</span> {t('aboutPage.whyUs.expertTeam.description')}
              </p>
            </div>
            <div className="flex flex-row items-center justify-start gap-5 mt-2">
              <FaRegCheckCircle className="text-green text-6xl" />
              <p className="text-gray-500 ">
                <span className="font-medium">{t('aboutPage.whyUs.flexiblePrograms.label')}</span> {t('aboutPage.whyUs.flexiblePrograms.description')}
              </p>
            </div>
            <div className="flex flex-row items-center justify-start gap-5 mt-2">
              <FaRegCheckCircle className="text-green text-5xl" />
              <p className="text-gray-500 ">
                <span className="font-medium">{t('aboutPage.whyUs.comprehensiveSupport.label')}</span> {t('aboutPage.whyUs.comprehensiveSupport.description')}
              </p>
            </div>
          </div>
          <Image
            src={About2}
            alt={t('aboutPage.additionalImageAlt')}
            className="w-1/3 h-full object-cover"
          />
        </div>
      </main>
    </div>
  );
};

export default Page;
