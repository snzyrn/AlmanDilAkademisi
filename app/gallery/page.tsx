"use client";

import React from "react";
import Image from "next/image";
import Script from "next/script";
import Courses from "../../assets/gallery.jpg";
import FadeUp from "@/components/FadeUp";
import { useTranslation } from "react-i18next";
import "../i18n.js";

const Page = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <FadeUp className="relative w-full h-72">
        <Image
          src={Courses}
          alt={t("coursesPage.heroImageAlt")}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <h1 className="text-white text-3xl font-normal">
            {t("galleryPage.title")}
          </h1>
        </div>
      </FadeUp>
      <main className="flex-grow p-4 flex flex-col items-center mx-20">
        <Script
          src="https://cdn.lightwidget.com/widgets/lightwidget.js"
          strategy="lazyOnload"
        />
        <iframe
          src="//lightwidget.com/widgets/6e09ec25de395fdb8a6b01b251083c5e.html"
          scrolling="no"
          allowTransparency={true}
          className="w-full border-0 overflow-hidden"
        ></iframe>
      </main>
    </div>
  );
};

export default Page;
