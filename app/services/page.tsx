"use client";

import React from "react";
import Image from "next/image";
import Sevices from "../../assets/sevices.jpeg";
import { MdOutlineSchool } from "react-icons/md";
import { LuSchool, LuNewspaper, LuPencil } from "react-icons/lu";
import { GrMapLocation } from "react-icons/gr";
import { FaRegSun } from "react-icons/fa";
import FadeUp from "@/components/FadeUp";
import { useTranslation } from "react-i18next";

const Page = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <FadeUp className="relative w-full h-72">
        <Image
          src={Sevices}
          alt={t("servicesPage.heroImageAlt")}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <h1 className="text-white text-3xl font-normal">
            {t("servicesPage.title")}
          </h1>
        </div>
      </FadeUp>
      <main className="flex-grow p-4">
        <div className="text-gray-500 text-lg 2xl:text-xl text-center mt-10 px-4 md:px-24">
          <p>{t("servicesPage.description")}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-4 sm:mx-8 md:mx-24 my-10">
          <div className="bg-light rounded flex flex-col justify-start items-start p-6 sm:p-8 md:p-12">
            <GrMapLocation className="text-4xl sm:text-5xl md:text-6xl mb-4" />
            <h3 className="text-xl sm:text-2xl font-medium mb-2">
              {t("servicesPage.jobOpportunities.title")}
            </h3>
            <p className="text-sm sm:text-base text-gray-500">
              {t("servicesPage.jobOpportunities.description")}
            </p>
          </div>
          <div className="bg-transparent border-2 border-light rounded flex flex-col justify-start items-start p-6 sm:p-8 md:p-12">
            <LuSchool className="text-4xl sm:text-5xl md:text-6xl mb-4" />
            <h3 className="text-xl sm:text-2xl font-medium mb-2">
              {t("servicesPage.languageSchool.title")}
            </h3>
            <p className="text-sm sm:text-base text-gray-500">
              {t("servicesPage.languageSchool.description")}
            </p>
          </div>
          <div className="bg-light rounded flex flex-col justify-start items-start p-6 sm:p-8 md:p-12">
            <MdOutlineSchool className="text-4xl sm:text-5xl md:text-6xl mb-4" />
            <h3 className="text-xl sm:text-2xl font-medium mb-2">
              {t("servicesPage.studyAbroadConsulting.title")}
            </h3>
            <p className="text-sm sm:text-base text-gray-500">
              {t("servicesPage.studyAbroadConsulting.description")}
            </p>
          </div>
          <div className="bg-transparent border-2 border-light rounded flex flex-col justify-start items-start p-6 sm:p-8 md:p-12">
            <LuNewspaper className="text-4xl sm:text-5xl md:text-6xl mb-4" />
            <h3 className="text-xl sm:text-2xl font-medium mb-2">
              {t("servicesPage.visaConsulting.title")}
            </h3>
            <p className="text-sm sm:text-base text-gray-500">
              {t("servicesPage.visaConsulting.description")}
            </p>
          </div>
          <div className="bg-light rounded flex flex-col justify-start items-start p-6 sm:p-8 md:p-12">
            <FaRegSun className="text-4xl sm:text-5xl md:text-6xl mb-4" />
            <h3 className="text-xl sm:text-2xl font-medium mb-2">
              {t("servicesPage.summerCamp.title")}
            </h3>
            <p className="text-sm sm:text-base text-gray-500">
              {t("servicesPage.summerCamp.description")}
            </p>
          </div>
          <div className="bg-transparent border-2 border-light rounded flex flex-col justify-start items-start p-6 sm:p-8 md:p-12">
            <LuPencil className="text-4xl sm:text-5xl md:text-6xl mb-4" />
            <h3 className="text-xl sm:text-2xl font-medium mb-2">
              {t("servicesPage.translation.title")}
            </h3>
            <p className="text-sm sm:text-base text-gray-500">
              {t("servicesPage.translation.description")}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
