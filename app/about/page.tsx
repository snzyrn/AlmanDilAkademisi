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
          alt={t("aboutPage.heroImageAlt")}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <h1 className="text-white text-2xl sm:text-3xl font-normal">
            {t("aboutPage.title")}
          </h1>
        </div>
      </FadeUp>
      <main className="flex-grow p-4 md:p-8">
        <div className="text-gray-500 text-base sm:text-lg md:text-xl text-center mt-6 sm:mt-10 px-4 md:px-8 lg:px-20">
          <p>{t("aboutPage.description")}</p>
        </div>
        <div className="flex justify-center"></div>
        <div className="flex flex-col lg:flex-row items-center justify-center mt-10 lg:mt-20 mb-10 lg:mb-24 gap-4 lg:gap-5">
          <div className=" w-full">
            <h2 className="font-medium text-2xl sm:text-3xl md:text-4xl">
              {t("aboutPage.whyUs.title")}
            </h2>
            <p className="text-gray-500 text-base sm:text-lg md:text-xl mt-4">
              {t("aboutPage.whyUs.description")}
            </p>
            <div className="flex flex-col  items-start gap-4 mt-4">
              <div className="flex items-start gap-3 md:gap-5">
                <FaRegCheckCircle className="text-green text-3xl" />
                <p className="text-gray-500">
                  <span className="font-medium">
                    {t("aboutPage.whyUs.expertTeam.label")}
                  </span>{" "}
                  {t("aboutPage.whyUs.expertTeam.description")}
                </p>
              </div>
              <div className="flex items-start gap-3 md:gap-5">
                <FaRegCheckCircle className="text-green text-5xl 2xl:text-3xl" />
                <p className="text-gray-500">
                  <span className="font-medium">
                    {t("aboutPage.whyUs.flexiblePrograms.label")}
                  </span>{" "}
                  {t("aboutPage.whyUs.flexiblePrograms.description")}
                </p>
              </div>
              <div className="flex items-start gap-3 md:gap-5">
                <FaRegCheckCircle className="text-green text-4xl 2xl:text-3xl" />
                <p className="text-gray-500">
                  <span className="font-medium">
                    {t("aboutPage.whyUs.comprehensiveSupport.label")}
                  </span>{" "}
                  {t("aboutPage.whyUs.comprehensiveSupport.description")}
                </p>
              </div>
            </div>
          </div>
          <div className="hidden lg:block lg:w-1/3">
            <Image
              src={About2}
              alt={t("aboutPage.additionalImageAlt")}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
