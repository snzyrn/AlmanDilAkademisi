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
    <footer className="relative pt-8">
      <div className="w-full border-t border-light border-2">
        <div className="flex lg:flex-wrap text-left w-full px-12 justify-center items-center mt-5">
          <div className="lg:w-5/12 w-full">
            <Image
              src={Logo}
              className="h-24 w-24 2xl:w-36 2xl:h-36"
              alt={t('footer.logoAlt')}
            />
            <h5 className="mt-10 mb-2 text-gray-500 text-sm lg:w-56 w-44">
              {t('footer.followUs')}
            </h5>
            <div className="mt-6 mb-3">
              <a href="https://www.instagram.com/aydinalmandilakademisi" target="_blank" rel="noopener noreferrer">
                <button className="text-text m-1 text-3xl" type="button">
                  <AiFillInstagram />
                </button>
              </a>
              <a href="https://www.facebook.com/aydinalmandilakademisi" target="_blank" rel="noopener noreferrer">
                <button className="text-text m-1 ml-3 text-3xl" type="button">
                  <AiFillFacebook />
                </button>
              </a>
            </div>
          </div>
          <div className="w-6/12">
            <div className="flex lg:flex-wrap flex-row lg:items-top items-center justify-center w-full p-5">
              <div className="w-4/12">
                <span className="block text-text text-lg font-semibold mb-5">
                  {t('footer.links')}
                </span>
                <ul className="list-unstyled space-y-3">
                  <li>
                    <a
                      className="text-gray-500 block pb-2 text-base"
                      href="/about"
                    >
                      {t('footer.about')}
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-500 block pb-2 text-base"
                      href="/services"
                    >
                      {t('footer.services')}
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-500 block pb-2 text-base"
                      href="/courses"
                    >
                      {t('footer.courses')}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="lg:w-6/12 w-full ml-12">
                <span className="block text-text text-lg font-semibold mb-3">
                  {t('footer.contact')}
                </span>
                <ul className="list-unstyled space-y-4">
                  <li className="flex flex-row gap-3 items-center">
                    <FaPhone className="text-xl" />
                    <p className="text-gray-500">{t('footer.phone')}</p>
                  </li>
                  <li className="flex flex-row gap-3 items-center">
                    <IoMailSharp className="text-xl" />
                    <p className="text-gray-500">{t('footer.email')}</p>
                  </li>
                  <li className="flex flex-row gap-1 items-center">
                    <IoLocationSharp className="lg:text-3xl text-4xl" />
                    <p className="text-gray-500">{t('footer.address')}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center bg-light w-full h-14">
          <div className="w-4/12 mx-auto text-center">
            <div className="text-sm text-gray-500 font-semibold">
              {t('footer.copyright')} <span>2024</span>
              <a
                className="text-gray-500 hover:text-gray-800"
                target="_blank"
              />
              . {t('footer.companyName')}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
