"use client";

import React, { useState } from "react";
import Image from "next/image";
import Contact from "../assets/contact-us.png";
import { FaPhone } from "react-icons/fa6";
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
        setFormStatus(t('contactUs.formSuccess'));
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
      } else {
        setFormStatus(t('contactUs.formError'));
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setFormStatus(t('contactUs.formError'));
    }
  };

  return (
    <div className="relative isolate bg-white mx-24 lg:my-36 rounded-lg 2xl:w-1/2">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 lg:pb-20 pt-16 sm:pt-32 lg:static lg:px-8 lg:py-32 pb-56">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-text/10 lg:w-1/2 rounded-lg">
              <div className="relative w-full h-full">
                <Image
                  src={Contact}
                  alt={t('contactUs.contactUsImageAlt')}
                  fill
                  style={{ objectFit: "cover" }}
                  className="w-full h-full"
                />
              </div>
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-text">
              {t('contactUs.title')}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {t('contactUs.description')}
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
              <div className="flex gap-x-4">
                <ul className="flex flex-col items-start list-unstyled space-y-4">
                  <li className="flex flex-row gap-3 items-center">
                    <FaPhone className="text-xl" />
                    <p className="text-gray-500">{t('contactUs.phone')}</p>
                  </li>
                  <li className="flex flex-row gap-3 items-center">
                    <IoMailSharp className="text-xl" />
                    <p className="text-gray-500">{t('contactUs.email')}</p>
                  </li>
                  <li className="flex flex-row gap-1 items-center">
                    <IoLocationSharp className="text-3xl" />
                    <p className="text-gray-500">
                      {t('contactUs.address')}
                    </p>
                  </li>
                </ul>
              </div>
            </dl>
          </div>
        </div>
        <form
          className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-32"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-semibold leading-6 text-text">
                  {t('contactUs.firstName')}
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
                  {t('contactUs.lastName')}
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
                  {t('contactUs.emailLabel')}
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
                  {t('contactUs.message')}
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
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="mt-5 inline-block rounded bg-text px-6 pb-2 pt-2.5 font-medium leading-normal text-neutral-50 shadow-dark-3 transition duration-150 ease-in-out hover:bg-neutral-700 hover:shadow-dark-2 focus:bg-neutral-700 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-dark-2 motion-reduce:transition-none"
              >
                {t('contactUs.submitButton')}
              </button>
            </div>
            {formStatus && (
              <p className="mt-4 text-sm text-gray-600">{formStatus}</p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
