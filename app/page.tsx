"use client";

import Hero from "@/components/Hero";
import ContactUs from "@/components/ContactUs";
import CounterWidget from "@/components/CounterWidget";
import FadeUp from "@/components/FadeUp";

import Image from "next/image";
import A24_Logo from "../assets/logos/a24_Logo.svg";
import FSZ_Logo from "../assets/logos/FSZ_Logo.svg";
import IBA_Logo from "../assets/logos/iba_Logo.svg";
import HPC_Logo from "../assets/logos/HPC_Logo.svg";
import VICTORIA_Logo from "../assets/logos/VICTORIA_Logo.svg";
import IBMG_Logo from "../assets/logos/IBMG_Logo.jpeg";
import ISBA_Logo from "../assets/logos/ISBA_Logo.svg";
import About from "../assets/about.png";
import Student from "../assets/student.png";
import Student2 from "../assets/student-2.png";
import Education from "../assets/icons/education.png";
import Book from "../assets/icons/book.png";
import Document from "../assets/icons/document.png";
import { useTranslation } from "react-i18next";
import "./i18n.js";

const LOGOS = [
  { src: A24_Logo, alt: "A24 Logo" },
  { src: FSZ_Logo, alt: "FSZ Logo" },
  { src: IBA_Logo, alt: "IBA Logo" },
  { src: HPC_Logo, alt: "HPC Logo" },
  { src: VICTORIA_Logo, alt: "VICTORIA Logo" },
  { src: IBMG_Logo, alt: "IBMG Logo" },
  { src: ISBA_Logo, alt: "ISBA Logo" },
];

export default function Home() {
  const { t } = useTranslation();

  return (
    <main className="relative bg-white flex justify-center items-center flex-col overflow-hidden">
      <div className="w-full">
        <FadeUp>
          <Hero />
        </FadeUp>
        <div className="relative lg:my-8 w-full my-20 lg:block p-5 px-10 overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
          <div className="animate-infinite-slider flex w-[calc(333px*14)]">
            {LOGOS.map((logo, index) => (
              <div
                className="slide flex w-[250px] 2xl:w-[350px] items-center justify-center px-5"
                key={`logo-${index}`}
              >
                <Image
                  src={logo.src}
                  width={200}
                  height={56}
                  alt={logo.alt}
                  className="grayscale"
                />
              </div>
            ))}
            {LOGOS.map((logo, index) => (
              <div
                className="slide flex w-[250px] 2xl:w-[350px] items-center justify-center px-5"
                key={`logo-${index + LOGOS.length}`}
              >
                <Image
                  src={logo.src}
                  width={200}
                  height={56}
                  alt={logo.alt}
                  className="grayscale"
                />
              </div>
            ))}
          </div>
        </div>
        <FadeUp className="mx-10 lg:mx-24 lg:mb-20 lg:mt-20 flex lg:flex-row flex-col justify-center items-center">
          <div className="lg:w-1/2 w-full lg:mr-12 2xl:w-5/12">
            <h2 className="text-text font-medium text-5xl mb-5 lg:mt-12 mt-5">
              {t("homePage.whoWeAre.title")}
            </h2>
            <p className="text-gray-500 text-lg 2xl:w-2/3 2xl:text-xl">
              {t("homePage.whoWeAre.description")}
            </p>
            <button
              type="button"
              onClick={() => (window.location.href = "/about")}
              className="mt-10 inline-block rounded bg-text px-6 pb-2 pt-2.5 2xl:mt-16 font-medium leading-normal text-neutral-50 shadow-dark-3 transition duration-150 ease-in-out hover:bg-neutral-700 hover:shadow-dark-2 focus:bg-neutral-700 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-dark-2 motion-reduce:transition-none"
            >
              {t("homePage.whoWeAre.buttonText")}
            </button>
          </div>
          <Image
            src={About}
            alt={t("homePage.whoWeAre.altText")}
            width={550}
            className="my-20 lg:my-0"
          />
        </FadeUp>
        <CounterWidget />
        <FadeUp className="mx-10 lg:mx-24 flex lg:flex-row flex-col justify-center items-center">
          <Image
            src={Student}
            alt={t("homePage.careerSupport.altText")}
            width={400}
            className="hidden lg:block mr-32"
          />
          <div className="lg:w-1/2 w-full lg:mr-12 2xl:w-5/12 my-24">
            <h2 className="text-text font-medium text-5xl mb-20 mt-12">
              {t("homePage.careerSupport.title")}
            </h2>
            <p className="text-gray-500 text-lg 2xl:text-xl">
              {t("homePage.careerSupport.description")}
            </p>
            <button
              type="button"
              onClick={() => (window.location.href = "/services")}
              className="mt-10 2xl:mt-16 inline-block rounded bg-text px-6 pb-2 pt-2.5 font-medium leading-normal text-neutral-50 shadow-dark-3 transition duration-150 ease-in-out hover:bg-neutral-700 hover:shadow-dark-2 focus:bg-neutral-700 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-dark-2 motion-reduce:transition-none"
            >
              {t("homePage.careerSupport.buttonText")}
            </button>
          </div>
        </FadeUp>

        <div className="flex lg:flex-row flex-col lg:items-stretch items-center justify-center p-10 gap-16 2xl:gap-20 2xl:py-20 bg-gray-50 px-5">
          <div className="flex flex-col items-center justify-center bg-white rounded-xl w-full lg:w-1/4 2xl:w-1/6 py-10 p-5">
            <Image
              src={Education}
              alt={t("homePage.serviceCards.education.altText")}
              width={50}
              height={50}
              className="mb-3"
            />
            <h3 className="text-text text-xl text-center lg:text-start font-medium 2xl:text-2xl">
              {t("homePage.serviceCards.education.title")}
            </h3>
            <p className="text-gray-500 text-center mt-2">
              {t("homePage.serviceCards.education.description")}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center bg-white rounded-xl w-full lg:w-1/4 2xl:w-1/6 py-10 p-5">
            <Image
              src={Book}
              alt={t("homePage.serviceCards.germanLessons.altText")}
              width={50}
              height={50}
              className="mb-3"
            />
            <h3 className="text-text text-center lg:text-start text-xl 2xl:text-2xl font-medium">
              {t("homePage.serviceCards.germanLessons.title")}
            </h3>
            <p className="text-gray-500 text-center mt-2">
              {t("homePage.serviceCards.germanLessons.description")}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center bg-white rounded-xl w-full lg:w-1/4 2xl:w-1/6 py-10 p-5">
            <Image
              src={Document}
              alt={t("homePage.serviceCards.consulting.altText")}
              width={50}
              height={50}
              className="mb-3"
            />
            <h3 className="text-text text-xl text-center lg:text-start 2xl:text-2xl font-medium">
              {t("homePage.serviceCards.consulting.title")}
            </h3>
            <p className="text-gray-500 text-center mt-2">
              {t("homePage.serviceCards.consulting.description")}
            </p>
          </div>
        </div>
        <FadeUp className="mx-10 lg:mx-24 lg:mt-20 flex lg:flex-row flex-col justify-center items-center">
          <div className="lg:w-1/2 w-full lg:mr-12 2xl:w-5/12 mt-12">
            <h2 className="text-text font-medium text-5xl mb-5 mt-12">
              {t("homePage.exploreCourses.title")}
            </h2>
            <p className="text-gray-500 text-lg 2xl:text-xl">
              {t("homePage.exploreCourses.description")}
            </p>
            <button
              type="button"
              onClick={() => (window.location.href = "/courses")}
              className="mt-10 2xl:mt-16 inline-block rounded bg-text px-6 pb-2 pt-2.5 font-medium leading-normal text-neutral-50 shadow-dark-3 transition duration-150 ease-in-out hover:bg-neutral-700 hover:shadow-dark-2 focus:bg-neutral-700 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-dark-2 motion-reduce:transition-none"
            >
              {t("homePage.exploreCourses.buttonText")}
            </button>
          </div>
          <Image
            src={Student2}
            alt={t("homePage.exploreCourses.altText")}
            width={550}
            className="my-12 lg:my-0"
          />
        </FadeUp>
        <div className="flex justify-center">
          <ContactUs />
        </div>
      </div>
    </main>
  );
}
