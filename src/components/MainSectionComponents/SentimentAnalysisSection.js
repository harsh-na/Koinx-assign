import React from "react";
import sentimentMsgIcon from "../../assets/sentimentMsgIcon.png";
import sentimentGraphIcon from "../../assets/sentimentGraphIcon.png";
import SvgInfo from '../../assets/SVG.png'


// Reusable Component for Analyst Figures
const AnalystFigure = ({ label, percentage, barWidth, barColor }) => (
  <div className="flex items-center gap-4 w-100 py-1 max-md:flex-wrap max-md:max-w-full">
    <div>{label}</div>
    <div className={`h-2 rounded-md ${barColor}`} style={{ width: `${barWidth}%` }}></div>
    <div className="flex-auto text-sm leading-5">{percentage}%</div>
  </div>
);

const AnalystEstimates = () => {
  const analystData = [
    { label: "Buy", percentage: 76, barWidth: 76, barColor: "bg-emerald-500" },
    { label: "Hold", percentage: 8, barWidth: 8, barColor: "bg-neutral-300" },
    { label: "Sell", percentage: 16, barWidth: 16, barColor: "bg-red-500" },
  ];

  return (
    <div className="flex p-4 flex-col max-w-[710px]">
      <header className="flex gap-2 pr-20 text-xl font-semibold leading-5 text-gray-700 whitespace-nowrap max-md:flex-wrap max-md:pr-5 max-md:max-w-full pt-4">
        <h1>Analyst Estimates</h1>
        <img loading="lazy" src={SvgInfo} alt="Insight icon" />
      </header>
      <section className="mt-6 w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[17%] max-md:ml-0 max-md:w-full">
            <div className="flex justify-center items-center self-stretch px-8 mx-auto font-medium text-emerald-500 whitespace-nowrap bg-emerald-50 h-[119px] rounded-[59.22px] w-[119px] max-md:px-5 max-md:mt-10">
              <div className="flex gap-0.5 justify-between py-1.5">
                <div className="grow text-4xl">76</div>
                <div className="grow my-auto text-base leading-6">%</div>
              </div>
            </div>
          </div>
          <div className={`flex flex-col ml-5 max-md:ml-0 w-[100%] max-md:w-full`}>
            <div className="flex flex-col  self-stretch my-auto font-medium text-gray-500 whitespace-nowrap max-md:mt-10 max-md:max-w-full">
              { 
                analystData.map((item, index) => (
                  <AnalystFigure key={index} {...item} />
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};



const InfoCard = ({ imageSrc, altText, title, description }) => (
  <div className="flex flex-col grow self-stretch px-5 pt-5 pb-10 w-full text-sm leading-5 bg-indigo-50 rounded-xl border-0 max-md:mt-3.5 max-md:max-w-full">
    <div className="flex gap-2 justify-between py-px">
      <img
        loading="lazy"
        src={imageSrc}
        alt={altText}
        className="self-start w-11 aspect-square"
      />
      <div className="flex flex-col flex-1">
        <div className="font-medium text-zinc-900">{title}</div>
        <div className="mt-2 text-slate-600">{description}</div>
      </div>
    </div>
  </div>
);

const SentimentAnalysisSection = () => {
  
    const infoCards = [
    {
      imageSrc:sentimentMsgIcon
        ,
      altText: "description for image 1",
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum.",
    },
    {
      imageSrc:
        sentimentGraphIcon,
      altText: "description for image 2",
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum.",
    },
  ];

  return (
    <div className="flex flex-col px-6 pt-7 pb-12 bg-white rounded-lg max-w-[881px] max-md:px-5">
      <header className="text-2xl font-semibold leading-7 text-slate-900 max-md:max-w-full">
        Sentiment
      </header>
      <div className="flex gap-1.5   pr-20 mt-6 text-xl font-semibold leading-5 text-gray-700 whitespace-nowrap max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
        <div className="flex">Key Events</div>
        <img
          loading="lazy"
          src={SvgInfo}
          alt="key events icon"
          className="w-5 aspect-square"
        />
      </div>
      <section className="mt-4 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {infoCards.map((card, index) => (
            <InfoCard key={index} {...card} />
          ))}
        </div>
      </section>
      <AnalystEstimates/>
       
    </div>
  );
}

export default SentimentAnalysisSection