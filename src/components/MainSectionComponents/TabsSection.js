import React, { useState } from "react";
import PolyGon from "../../assets/Polygon.png";

// Reusable Component for Stats Display
const StatItem = ({ label, value }) => (
  <div className="flex gap-5 justify-between py-4 border-b border-solid border-b-[color:var(--day-gray-04,#D3E0E6)]">
    <div className="flex-auto text-sm leading-5 text-slate-500">{label}</div>
    <div className="flex-auto text-sm leading-5 text-right text-gray-900">
      {value}
    </div>
  </div>
);

// Main Component
const CryptoStats = () => {
  // Data for stats, to be replaced with dynamic data in real use cases
  const statsData = [
    { label: "Bitcoin Price", value: "$16,815.46" },
    { label: "24h Low / 24h High", value: "$16,382.07 / $16,874.12" },
    { label: "7d Low / 7d High", value: "$16,382.07 / $16,874.12" },
    { label: "Trading Volume", value: "$23,249,202,782" },
    { label: "Market Cap Rank", value: "#1" },
    { label: "Market Cap", value: "$323,507,290,047" },
    { label: "Market Cap Dominance", value: "38.343%" },
    { label: "Volume / Market Cap", value: "0.0718" },
    { label: "All-Time High", value: "$69,044.77 -75.6%" },
    { label: "All-Time Low", value: "$67.81 24729.1%" },
  ];

  return (
    <section className="flex flex-col max-w-[820px] pt-6">
      <header className="flex gap-1.5 self-start pr-20 text-xl font-semibold leading-5 text-gray-700 whitespace-nowrap max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
        <h1 className="grow">Fundamentals</h1>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a43ad8ea5bf1c379eb189c199abdc04ce743e51cc1aa243ed118a507856be2a9?apiKey=2b10f3d4f07b463b82ae2fcf31a50eea&"
          alt="Fundamentals Icon"
          className="w-5 aspect-square"
        />
      </header>
      <div className="mt-4 w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow pr-10 font-medium max-md:mt-10">
              {statsData.slice(0, 5).map((stat) => (
                <StatItem
                  key={stat.label}
                  label={stat.label}
                  value={stat.value}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-10">
              {statsData.slice(5).map((stat) => (
                <StatItem
                  key={stat.label}
                  label={stat.label}
                  value={stat.value}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MenuItem = ({ name, isActive, onClick }) => {
  return (
    <button
      className={`flex-auto my-1 mx-2 h-10 py-2 ${
        isActive
          ? "font-semibold text-blue-700 md:whitespace-nowrap border-solid aspect-[1.52] border-b-[3px] border-b-blue-600"
          : ""
      }`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

const NavigationBar = () => {
  const [activeItem, setActiveItem] = useState("Overview");

  // Menu items data
  const menuItems = [
    "Overview",
    "Fundamentals",
    "NewsInsights",
    "Sentiments",
    "Team",
    "Technicals",
    "Tokenomics",
  ];

  const handleItemClick = (name) => {
    setActiveItem(name);
  };

  return (
    <nav className="flex md:gap-2  md:max-w-[881px] overflow-x-auto gap-6  justify-between items-center  border-b border-solid  text-zinc-700 md:flex-wrap">
      {menuItems.map((name) => (
        <MenuItem
          key={name}
          name={name}
          isActive={activeItem === name}
          onClick={() => handleItemClick(name)}
        />
      ))}
    </nav>
  );
};


// Statistic information component for reusability
const StatisticInfo = ({ title, value }) => (
  <div className="flex flex-col pt-1.5 pb-3.5 text-gray-700 whitespace-nowrap">
    <div className="text-sm leading-5">{title}</div>
    <div className="mt-2.5 text-base font-medium leading-6">{value}</div>
  </div>
);

// Indicator component
const Indicator = () => (
  <div className="flex flex-col flex-1 justify-center  my-auto rounded-lg bg-gradient-to-r from-red-600 to-green-400">
    <div className="shrink-0 rounded-xl h-2" />
  </div>
);

 

// Header component
const PageHeader = ({ title }) => (
  <header className="text-2xl font-semibold leading-7 text-slate-900">
    {title}
  </header>
);

function NavigationBarDashboard() {
  return (
    <section className="flex flex-col px-6 pt-7 pb-12 bg-white rounded-lg max-w-[881px] md:px-5">
      <PageHeader title="Performance" />
      <div className="flex gap-2 px-px mt-4 md:flex-wrap relative">
        <StatisticInfo title="Today’s Low" value="46,930.22" />
        <Indicator />
          <img
          src={PolyGon}
          alt=""
          className="absolute top-10 right-26 md:right-48 h-4 w-4"
        />
        <div className="absolute top-10  right-24 md:right-28 text-sm md:leading-5 text-gray-700 md:mr-2.5">
           $48,637.83
        </div>
        <StatisticInfo title="Today’s High" value="49,343.83" />
      </div>

      <div className="flex gap-2 px-px mt-4 md:flex-wrap">
        <StatisticInfo title="52W Low" value="16,930.22" />
        <Indicator />
        <StatisticInfo title="52W High" value="49,743.83" />
      </div>
 <CryptoStats/>
    </section>
  );
}


const TabsSection = () => {
  return (
    <>
        <NavigationBar />
        <NavigationBarDashboard />
    </>
  )
}

export default TabsSection