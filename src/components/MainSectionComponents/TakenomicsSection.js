import React from "react";
import CircularFrame from "../../assets/Frame 1116601936.png";

const DistributionItem = ({ color, label, percentage }) => (
  <div className="flex gap-2.5 justify-between mt-4 max-md:mt-4">
    <div className={`my-auto w-3 h-3 ${color} rounded-md`} />
    <div className="flex-auto">
      {label}: {percentage}%
    </div>
  </div>
);

const distributionData = [
  { color: "bg-sky-500", label: "Crowdsale investors", percentage: 80 },
  { color: "bg-amber-500", label: "Foundation", percentage: 20 },
];

const TakenomicsSection = () => (
  <section className="flex flex-col pt-7 pb-12 pl-8 bg-white rounded-lg max-w-[881px] max-md:pl-5">
    <header className="text-2xl font-semibold leading-7 text-slate-900 max-md:max-w-full">Tokenomics</header>
    <h2 className="mt-8 text-xl font-semibold leading-9 text-stone-900 max-md:max-w-full">Initial Distribution</h2>
    <div className="py-6 max-md:pr-5 max-md:max-w-full flex max:flex max-md:gap-0">
      <div className="flex flex-col w-[25%] max-md:ml-0 max-md:w-full">
        <img loading="lazy" src={CircularFrame} className="max-w-full aspect-square w-[179px] max-md:mt-10" alt="" />
      </div>
      <div className="flex flex-col w-[50%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col justify-center self-stretch py-4 md:mr-7  my-auto text-base text-neutral-800 max-md:mt-10">
          {distributionData.map((item) => (
            <DistributionItem key={item.label} color={item.color} label={item.label} percentage={item.percentage} />
          ))}
        </div>
      </div>
    </div>
    <p className="text-base pr-10 pt-6 font-medium leading-7 text-[#3E424A] max-md:max-w-full">
      Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum
      amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse
      urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel
      ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.
    </p>
  </section>
);

export default TakenomicsSection;
