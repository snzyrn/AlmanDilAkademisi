"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/logos/logo.png";
import { useTranslation } from "react-i18next";
import { HiMenu, HiX } from "react-icons/hi";

import "../app/i18n.js";

const NavBar = () => {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLang(lng);
    setIsDropdownOpen(false);
  };

  return (
    <header>
      <nav className="bg-white px-4 lg:px-16 py-2.5 relative">
        <div className="flex items-center justify-between mx-auto max-w-screen-xl">
          <Link href="/" className="flex items-center">
            <Image src={Logo} className="w-16" alt="Alman Dil Akademisi" />
          </Link>
          <div className="flex items-center lg:hidden">
            <button
              className="text-gray-500 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
          <div className={`hidden lg:flex flex-1 justify-center`}>
            <ul className="flex space-x-8 font-medium">
              <li>
                <Link href="/" className="py-2 text-text hover:text-red">
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="py-2 text-text hover:text-red">
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="py-2 text-text hover:text-red"
                >
                  {t("services")}
                </Link>
              </li>
              <li>
                <Link href="/courses" className="py-2 text-text hover:text-red">
                  {t("courses")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="py-2 text-text hover:text-red">
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>
          <div className={`relative hidden lg:block`}>
            <button
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              {lang === "tr" ? "TR" : "DE"}
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                <button
                  onClick={() => changeLanguage("tr")}
                  className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100 text-left"
                >
                  TR
                </button>
                <button
                  onClick={() => changeLanguage("de")}
                  className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100 text-left"
                >
                  DE
                </button>
              </div>
            )}
          </div>
        </div>
        {isMenuOpen && (
          <div className="lg:hidden fixed top-14 left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-w-screen-xl mx-auto">
            <ul className="flex flex-col">
              <li>
                <Link
                  href="/"
                  className="block py-2 text-text hover:text-red"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block py-2 text-text hover:text-red"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="block py-2 text-text hover:text-red"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("services")}
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="block py-2 text-text hover:text-red"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("courses")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block py-2 text-text hover:text-red"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("contact")}
                </Link>
              </li>
              <li>
                <button
                  onClick={() => changeLanguage("tr")}
                  className="block w-full py-2 text-gray-700 hover:bg-gray-100 text-left"
                >
                  TR
                </button>
              </li>
              <li>
                <button
                  onClick={() => changeLanguage("de")}
                  className="block w-full py-2 text-gray-700 hover:bg-gray-100 text-left"
                >
                  DE
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
