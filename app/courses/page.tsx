"use client";

import React from "react";
import Image from "next/image";
import Courses from "../../assets/courses.jpg";
import { HiUserGroup } from "react-icons/hi2";
import { ImBook } from "react-icons/im";
import { FaClock } from "react-icons/fa6";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import Student from "../../assets/course/student-1.png";
import Student2 from "../../assets/course/student-2.jpeg";
import Student3 from "../../assets/course/student-3.png";
import Student4 from "../../assets/course/student-4.png";
import Student5 from "../../assets/course/student-5.png";
import Student6 from "../../assets/course/student-6.png";
import { useTranslation } from "react-i18next";
import FadeUp from "@/components/FadeUp";

import "../i18n.js";


const Page = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <FadeUp className="relative w-full h-72">
        <Image
          src={Courses}
          alt={t('coursesPage.heroImageAlt')}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <h1 className="text-white text-3xl font-normal">{t('coursesPage.title')}</h1>
        </div>
      </FadeUp>
      <main className="flex-grow p-4 flex flex-col items-center">
        <div className="text-gray-500 text-lg 2xl:text-xl text-center mt-10 px-24">
          <p>{t('coursesPage.description')}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 w-full max-w-4xl justify-center">
          <div className="flex items-center">
            <HiUserGroup className="text-3xl" />
            <p className="text-gray-500 2xl:text-xl pl-5">
              {t('coursesPage.classSize')}
            </p>
          </div>
          <div className="flex items-center">
            <ImBook className="text-2xl" />
            <p className="text-gray-500 2xl:text-xl pl-5">
              {t('coursesPage.classType')}
            </p>
          </div>
          <div className="flex items-center">
            <FaClock className="text-2xl" />
            <p className="text-gray-500 2xl:text-xl pl-5">
              {t('coursesPage.schedule')}
            </p>
          </div>
          <div className="flex items-center">
            <IoIosArrowDroprightCircle className="text-3xl" />
            <p className="text-gray-500 2xl:text-xl pl-5">
              {t('coursesPage.courseLevels')}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-20 mb-24 w-full max-w-screen-lg">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div key={index} className="max-w-md w-full rounded-lg bg-[#FAFAFA] flex flex-col items-center p-5 shadow-md">
              <div className="w-full h-48 relative">
                <Image
                  src={require(`../../assets/course/student-${index}.png`)}
                  alt={t(`coursesPage.course${index}.altText`)}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <FadeUp className="w-full mt-4 px-5">
                <h2 className="text-xl font-medium">{t(`coursesPage.course${index}.title`)}</h2>
                <p className="text-sm text-gray-500 pt-2 pb-5">
                  {t(`coursesPage.course${index}.description`)}
                </p>
              </FadeUp>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Page;
