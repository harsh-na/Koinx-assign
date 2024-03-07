import React from "react";
import { teamMembers } from "../constants";

const TeamMemberCard = ({ imageSrc, altText, name, designation, bio }) => {
  return (
    <div className="p-2 mr-5  mt-6 bg-[#e5eef6] rounded-lg border-0 border-solid  max-md:max-w-full">
      <div className="flex  max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[20%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow px-4 text-center   max-md:mt-7">
            <img loading="lazy" src={imageSrc} alt={altText} className="self-center aspect-[0.93] w-[98px] rounded-md" />
            <div className="mt-3.5 text-base font-semibold text-slate-900">{name}</div>
            <div className="mt-1 text-xs font-medium text-slate-500">{designation}</div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[84%] max-md:ml-0 max-md:w-full">
          <div className=" text-balance my-auto text-sm leading-6 text-slate-900 max-md:mt-10 max-md:max-w-full">
            {bio}
          </div>
        </div>
      </div>
    </div>
  );
};

const TeamMembersSection = () => {

  return (
    <section className="flex flex-col py-9 mb-10 pl-6 bg-white rounded-lg max-w-[881px] max-md:pl-5">
      <header className="text-2xl font-semibold leading-7 text-[#0F1629] max-md:max-w-full">Team</header>
      <div className="pt-5 mr-7 text-base font-medium	 leading-7 text-[#3E424A] max-md:mr-2.5 max-md:max-w-full">
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.
      </div>
      {teamMembers.map((member, index) => (
        <TeamMemberCard key={index} {...member} />
      ))}
    </section>
  );
};

export default TeamMembersSection;
 