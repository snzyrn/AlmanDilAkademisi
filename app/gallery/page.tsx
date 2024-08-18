"use client";

import React from "react";
import Image from "next/image";
import Courses from "../../assets/gallery.jpg";
import FadeUp from "@/components/FadeUp";
import InstagramGrid from "@/components/InstagramGrid";

const page = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <FadeUp className="relative w-full h-72">
        <Image
          src={Courses}
          alt="coursesPage.heroImageAlt"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <h1 className="text-white text-3xl font-normal">page</h1>
        </div>
      </FadeUp>
      <main className="flex-grow p-4 flex flex-col items-center">
        <InstagramGrid />
      </main>
    </div>
  );
};

export default page;
