import React from 'react';
import { HiOutlineChevronDoubleRight } from "react-icons/hi";

const Breadcrumb = ({ items, activeIndex }) => {
  return (
    <div className="flex md:mx-16 mx-4 gap-1 my-4 text-sm whitespace-nowrap">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index !== 0 && <div className="font-medium text-slate-600 mt-1 flex"><HiOutlineChevronDoubleRight /></div>}
          <div className={`font-medium ${index === activeIndex ? 'text-black' : 'text-gray-500'}`}>{item}</div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumb;