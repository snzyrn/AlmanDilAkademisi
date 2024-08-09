import React from "react";
import { useTranslation } from "react-i18next";

type CounterBlockProps = {
  num: number;
  labelKey: string;
};

const CounterBlock = ({ num, labelKey }: CounterBlockProps) => {
  const { t } = useTranslation();

  return (
    <div className="relative overflow-hidden rounded-xl bg-white md:px-8 md:pt-10 md:pb-8 my-2 p-5">
      <div className="absolute inset-0 hidden items-center justify-center md:flex"></div>
      <div className="relative flex flex-col">
        <span className="text-4xl font-extrabold text-text md:text-5xl">
          {num}
        </span>
        <span className="mt-1 text-lg font-medium text-gray-500 md:text-xl">
          {t(labelKey)}
        </span>
      </div>
    </div>
  );
};

const CounterWidget = () => {
  const { t } = useTranslation();

  return (
    <main className="relative flex lg:flex-row flex-col justify-center items-center bg-gray-50 overflow-hidden px-10 lg:px-20">
      <div className="w-full max-w-7xl md:px-6 py-10">
        <section className="grid md:grid-cols-4 md:gap-12 2xl:gap-20">
          <CounterBlock num={258} labelKey="counter.studentsCertified" />
          <CounterBlock num={39} labelKey="counter.employedInGermany" />
          <CounterBlock num={41} labelKey="counter.universitiesInGermany" />
          <CounterBlock num={45} labelKey="counter.summerCampInGermany" />
        </section>
      </div>
    </main>
  );
};

export default CounterWidget;
