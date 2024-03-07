import React from "react";
import { GrFormNextLink } from "react-icons/gr";
import rectangle1 from "../../assets/Rectangle 11947.png";
import rectangle2 from "../../assets/Rectangle 11947 (1).png";

const InfoCard = ({ imageUrl, altText, title, buttonText, bgColor }) => (
  <div className={`flex flex-col w-full max-w-[388px] rounded-md  max-md:w-full ${bgColor}`}>
    <div className="flex gap-5 justify-between p-3 rounded-md">
      <img
        loading="lazy"
        src={imageUrl}
        alt={altText}
        className="w-32 aspect-square"
      />
      <div className="flex flex-col justify-center">
        <div className="text-[22px] font-bold text-white">{title}</div>
        <div className="flex  items-center mt-4">
          <button className="flex items-center gap-3 px-5 py-2 text-[16px] font-semibold bg-white rounded-lg text-slate-900">
            <span>{buttonText}</span>
            <GrFormNextLink className="w-5 text-xl aspect-square" />
          </button>
        </div>
      </div>
    </div>
  </div>
);

const FinancialAdviceSection = () => {
  const cardData = [
    {
      imageUrl: rectangle1,
      altText: "Calculate Profits",
      title: "Calculate your Profits",
      buttonText: "Check Now",
      bgColor: "bg-gradient-to-r from-[#79F1A4] to-[#0E5CAD]",
    },
    {
      imageUrl: rectangle2,
      altText: "Calculate Tax",
      title: "Calculate your tax liability",
      buttonText: "Check Now",
      bgColor: "bg-gradient-to-r from-[#FF9865] to-[#EF3031]",
    },
  ];

  return (
    <section className="max-w-[807px]">
      <header className="text-2xl font-semibold py-4 text-slate-900">
        Already Holding Bitcoin?
      </header>
      <div className="grid gap-5 md:grid-cols-2">
        {cardData.map((card, index) => (
          <InfoCard key={`card-${index}`} {...card} />
        ))}
      </div>
    </section>
  );
};

export default FinancialAdviceSection;
