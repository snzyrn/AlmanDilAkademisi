"use client";

import React, { useState } from "react";
import Image from "next/image";
import Contact from "../assets/contact-us.png";
import { FaPhone } from "react-icons/fa";
import { IoMailSharp, IoLocationSharp } from "react-icons/io5";
import { useTranslation } from "react-i18next";

const ContactUs = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus(t("contactUs.formSuccess"));
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
      } else {
        setFormStatus(t("contactUs.formError"));
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setFormStatus(t("contactUs.formError"));
    }
  };

  return (
    <div className="relative isolate bg-white mx-4 sm:mx-8 lg:mx-16 xl:mx-24 my-12 lg:my-36 rounded-lg overflow-hidden">
      <div className="absolute inset-0 -z-10 w-full h-full bg-gray-100 ring-1 ring-text/10 rounded-lg overflow-hidden">
        <Image
          src={Contact}
          alt={t("contactUs.contactUsImageAlt")}
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>
      <div className="relative px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-text">
              {t("contactUs.title")}
            </h2>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-6 text-gray-600">
              {t("contactUs.description")}
            </p>
            <dl className="mt-8 space-y-4 text-base leading-7 text-gray-600">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <FaPhone className="text-xl" />
                  <p className="text-gray-500">{t("contactUs.phone")}</p>
                </div>
                <div className="flex items-center gap-3">
                  <IoMailSharp className="text-xl" />
                  <p className="text-gray-500">{t("contactUs.email")}</p>
                </div>
                <div className="flex items-center gap-3 -ml-0.5">
                  <IoLocationSharp className="text-2xl flex-shrink-0" />
                  <p className="text-gray-500">{t("contactUs.address")}</p>
                </div>
              </div>
            </dl>
          </div>
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-semibold leading-6 text-text">
                  {t("contactUs.firstName")}
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    id="first-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold leading-6 text-text">
                  {t("contactUs.lastName")}
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    id="last-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold leading-6 text-text">
                  {t("contactUs.emailLabel")}
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    id="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold leading-6 text-text">
                  {t("contactUs.message")}
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className="inline-block rounded bg-text px-6 pb-2 pt-2.5 font-medium leading-normal text-neutral-50 shadow-dark-3 transition duration-150 ease-in-out hover:bg-neutral-700 hover:shadow-dark-2 focus:bg-neutral-700 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-dark-2"
              >
                {t("contactUs.submitButton")}
              </button>
            </div>
            {formStatus && (
              <p className="mt-4 text-sm text-gray-600">{formStatus}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
