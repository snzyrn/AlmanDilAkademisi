"use client";

import React from "react";
import Image from "next/image";
import ContactUs from "@/components/ContactUs";
import FadeUp from "@/components/FadeUp";
import Contact from "../../assets/contact.jpeg";
import { MdOutlineMail } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { FiPhone } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import "../i18n.js";

const Page = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <FadeUp className="relative w-full h-72">
        <Image
          src={Contact}
          alt="contact image"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <h1 className="text-white text-3xl font-normal">
            {t("contactPage.title")}
          </h1>
        </div>
      </FadeUp>
      <main className="flex-grow p-4">
        <div className="text-gray-500 text-lg 2xl:text-xl text-center mt-10 px-4 md:px-24">
          <p>{t("contactPage.description")}</p>
        </div>
        <FadeUp className="flex justify-center lg:flex-row flex-col gap-20 mt-28 mb-28">
          <div className="flex flex-col items-center">
            <div className="bg-light rounded-full p-5">
              <MdOutlineMail className="text-black text-4xl" />
            </div>
            <h3 className="text-2xl font-medium pt-3 pb-2">
              {t("contactPage.email")}
            </h3>
            <p className="text-gray-500">{t("contactPage.emailAddress")}</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-pink rounded-full p-5">
              <GrLocation className="text-red text-4xl" />
            </div>
            <h3 className="text-2xl font-medium pt-3 pb-2">
              {t("contactPage.location")}
            </h3>
            <p className="text-gray-500">{t("contactPage.locationAddress")}</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-yellow rounded-full p-5">
              <FiPhone className="text-[#DEAA27] text-4xl" />
            </div>
            <h3 className="text-2xl font-medium pt-3 pb-2">
              {t("contactPage.phone")}
            </h3>
            <p className="text-gray-500">{t("contactPage.phoneNumber")}</p>
          </div>
        </FadeUp>
        <div>
          <ContactUs />
        </div>
      </main>
    </div>
  );
};

export default Page;
