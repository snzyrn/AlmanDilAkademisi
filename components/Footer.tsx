"use client";

import React from "react";
import Image from "next/image";
import Logo from "../assets/logos/logo.png";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { FaPhone } from "react-icons/fa6";
import { IoMailSharp, IoLocationSharp } from "react-icons/io5";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="relative pt-8 bg-white">
      <div className="w-full border-t border-light border-2">
        <div className="flex flex-col lg:flex-row lg:flex-wrap w-full px-5 lg:px-12 justify-center lg:justify-between items-center mt-5">
          <div className="flex flex-col items-center lg:items-start mb-5 lg:mb-0 lg:w-5/12 w-full text-center lg:text-left">
            <Image
              src={Logo}
              className="h-24 w-24 2xl:w-36 2xl:h-36"
              alt={t("footer.logoAlt")}
            />
            <h5 className="mt-5 mb-2 text-gray-500 text-sm lg:w-56 w-44">
              {t("footer.followUs")}
            </h5>
            <div className="flex space-x-3 mt-4">
              <a
                href="https://www.instagram.com/aydinalmandilakademisi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="text-text text-3xl" type="button">
                  <AiFillInstagram />
                </button>
              </a>
              <a
                href="https://www.facebook.com/aydinalmandilakademisi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="text-text text-3xl" type="button">
                  <AiFillFacebook />
                </button>
              </a>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-between w-full lg:w-6/12 text-center lg:text-left">
            <div className="flex flex-col mb-5 lg:mb-0 lg:w-4/12 w-full items-center lg:items-start">
              <span className="block text-text text-lg font-semibold mb-3 lg:mb-5">
                {t("footer.links")}
              </span>
              <ul className="list-unstyled space-y-2">
                <li>
                  <a className="text-gray-500 text-base" href="/about">
                    {t("footer.about")}
                  </a>
                </li>
                <li>
                  <a className="text-gray-500 text-base" href="/services">
                    {t("footer.services")}
                  </a>
                </li>
                <li>
                  <a className="text-gray-500 text-base" href="/courses">
                    {t("footer.courses")}
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col mb-10 lg:w-6/12 w-full items-center lg:items-start">
              <span className="block text-text text-lg font-semibold mb-10 lg:mb-5">
                {t("footer.contact")}
              </span>
              <ul className="list-unstyled space-y-4">
                <li className="flex items-center space-x-3">
                  <FaPhone className="text-xl" />
                  <p className="text-gray-500">{t("footer.phone")}</p>
                </li>
                <li className="flex items-center space-x-3">
                  <IoMailSharp className="text-xl" />
                  <p className="text-gray-500">{t("footer.email")}</p>
                </li>
                <li className="flex items-center space-x-3">
                  <IoLocationSharp className="text-2xl lg:text-3xl" />
                  <p className="text-gray-500">{t("footer.address")}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center bg-light w-full h-14">
          <div className="text-sm text-gray-500 font-semibold text-center">
            {t("footer.copyright")} <span>2024</span>{" "}
            <span>{t("footer.companyName")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
