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
                <Link href="/gallery" className="py-2 text-text hover:text-red">
                  {t("gallery")}
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
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg flex items-center"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span className="mr-2">
                {lang === "tr" ? (
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="256" cy="256" fill="#d80027" r="256" />
                    <g fill="#f0f0f0">
                      <path d="m245.518 209.186 21.005 28.945 34.017-11.03-21.038 28.92 21.002 28.944-34.005-11.072-21.037 28.92.022-35.761-34.006-11.072 34.018-11.03z" />
                      <path d="m188.194 328.348c-39.956 0-72.348-32.392-72.348-72.348s32.392-72.348 72.348-72.348c12.458 0 24.18 3.151 34.414 8.696-16.055-15.702-38.012-25.392-62.24-25.392-49.178 0-89.043 39.866-89.043 89.043s39.866 89.043 89.043 89.043c24.23 0 46.186-9.691 62.24-25.392-10.234 5.547-21.956 8.698-34.414 8.698z" />
                    </g>
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m15.923 345.043c36.171 97.484 130.006 166.957 240.077 166.957s203.906-69.473 240.077-166.957l-240.077-22.26z"
                      fill="#ffda44"
                    />
                    <path d="m256 0c-110.071 0-203.906 69.472-240.077 166.957l240.077 22.26 240.077-22.261c-36.171-97.484-130.006-166.956-240.077-166.956z" />
                    <path
                      d="m15.923 166.957c-10.29 27.733-15.923 57.729-15.923 89.043s5.633 61.31 15.923 89.043h480.155c10.29-27.733 15.922-57.729 15.922-89.043s-5.632-61.31-15.923-89.043z"
                      fill="#d80027"
                    />
                  </svg>
                )}
              </span>
              {lang === "tr" ? "TR" : "DE"}
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                <button
                  onClick={() => changeLanguage("tr")}
                  className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100 text-left"
                >
                  <svg
                    className="w-6 h-6 mr-2"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="256" cy="256" fill="#d80027" r="256" />
                    <g fill="#f0f0f0">
                      <path d="m245.518 209.186 21.005 28.945 34.017-11.03-21.038 28.92 21.002 28.944-34.005-11.072-21.037 28.92.022-35.761-34.006-11.072 34.018-11.03z" />
                      <path d="m188.194 328.348c-39.956 0-72.348-32.392-72.348-72.348s32.392-72.348 72.348-72.348c12.458 0 24.18 3.151 34.414 8.696-16.055-15.702-38.012-25.392-62.24-25.392-49.178 0-89.043 39.866-89.043 89.043s39.866 89.043 89.043 89.043c24.23 0 46.186-9.691 62.24-25.392-10.234 5.547-21.956 8.698-34.414 8.698z" />
                    </g>
                  </svg>
                  TR
                </button>
                <button
                  onClick={() => changeLanguage("de")}
                  className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100 text-left"
                >
                  <svg
                    className="w-6 h-6 mr-2"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m15.923 345.043c36.171 97.484 130.006 166.957 240.077 166.957s203.906-69.473 240.077-166.957l-240.077-22.26z"
                      fill="#ffda44"
                    />
                    <path d="m256 0c-110.071 0-203.906 69.472-240.077 166.957l240.077 22.26 240.077-22.261c-36.171-97.484-130.006-166.956-240.077-166.956z" />
                    <path
                      d="m15.923 166.957c-10.29 27.733-15.923 57.729-15.923 89.043s5.633 61.31 15.923 89.043h480.155c10.29-27.733 15.922-57.729 15.922-89.043s-5.632-61.31-15.923-89.043z"
                      fill="#d80027"
                    />
                  </svg>
                  DE
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed top-0 left-0 w-full h-full bg-white z-50">
          <div className="flex justify-between items-center p-4">
            <Link href="/" className="flex items-center">
              <Image src={Logo} className="w-16" alt="Alman Dil Akademisi" />
            </Link>
            <button
              className="text-gray-500 p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <HiX size={24} />
            </button>
          </div>
          <ul className="flex flex-col items-center mt-6 space-y-4">
            <li>
              <Link
                href="/"
                className="text-text text-lg hover:text-red"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("home")}
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-text text-lg hover:text-red"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("about")}
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-text text-lg hover:text-red"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("services")}
              </Link>
            </li>
            <li>
              <Link
                href="/courses"
                className="text-text text-lg hover:text-red"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("courses")}
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-text text-lg hover:text-red"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("contact")}
              </Link>
            </li>
            <li>
              <button
                onClick={() => changeLanguage("tr")}
                className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100 text-left"
              >
                <svg
                  className="w-6 h-6 mr-2"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="256" cy="256" fill="#d80027" r="256" />
                  <g fill="#f0f0f0">
                    <path d="m245.518 209.186 21.005 28.945 34.017-11.03-21.038 28.92 21.002 28.944-34.005-11.072-21.037 28.92.022-35.761-34.006-11.072 34.018-11.03z" />
                    <path d="m188.194 328.348c-39.956 0-72.348-32.392-72.348-72.348s32.392-72.348 72.348-72.348c12.458 0 24.18 3.151 34.414 8.696-16.055-15.702-38.012-25.392-62.24-25.392-49.178 0-89.043 39.866-89.043 89.043s39.866 89.043 89.043 89.043c24.23 0 46.186-9.691 62.24-25.392-10.234 5.547-21.956 8.698-34.414 8.698z" />
                  </g>
                </svg>
                TR
              </button>
              <button
                onClick={() => changeLanguage("de")}
                className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100 text-left"
              >
                <svg
                  className="w-6 h-6 mr-2"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m15.923 345.043c36.171 97.484 130.006 166.957 240.077 166.957s203.906-69.473 240.077-166.957l-240.077-22.26z"
                    fill="#ffda44"
                  />
                  <path d="m256 0c-110.071 0-203.906 69.472-240.077 166.957l240.077 22.26 240.077-22.261c-36.171-97.484-130.006-166.956-240.077-166.956z" />
                  <path
                    d="m15.923 166.957c-10.29 27.733-15.923 57.729-15.923 89.043s5.633 61.31 15.923 89.043h480.155c10.29-27.733 15.922-57.729 15.922-89.043s-5.632-61.31-15.923-89.043z"
                    fill="#d80027"
                  />
                </svg>
                DE
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;
