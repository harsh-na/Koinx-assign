import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import TradingViewWidget from "./TradingViewChart";
 
import BitcoinIcon from "../../assets/BitcoinImg.png";

const PriceSummary = ({ price, currency }) => (
  <div className="flex flex-col  text-slate-900">
    <div className="text-2xl font-bold leading-10">${price}</div>
    <div className="  font-medium  ">₹{currency}</div>
  </div>
);
const CryptodDetailsDashBoard = () => {
  const [idCheck, setIdCheck] = useState('bitcoin');
  function changeType(coinsData) {
    if (coinsData?.usd_24h_change > 0) {
      return "positive";
    }
  }
  
  const [coinsData, setCoinsData] = useState({});
  const [price, setPrice] = useState({});
  const { id } = useParams();
  
  useEffect(() => {
    setIdCheck(id);
    fetchCoinData();
    fetchPrice();
  },  [id]);
   
  function fetchPrice() {
    fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${idCheck}&vs_currencies=inr%2Cusd&include_24hr_change=true`).then((response) => response.json()).then((data) => setPrice(data[idCheck]))
  }
  function fetchCoinData() {
    fetch(`https://api.coingecko.com/api/v3/coins/${idCheck}`)
      .then((response) => response.json())
      .then((data) => setCoinsData(data));

  }
console.log(coinsData);
  return (
    <section className="flex flex-col py-4 pl-2  h-[711px] bg-white rounded-lg max-w-full sm:pl-5">
      <header className="flex gap-6 justify-start whitespace-nowrap sm:flex-wrap sm:pr-5 sm:max-w-full">
        <div className="flex">
          <img
            src={coinsData?.image?.small  || BitcoinIcon}
            alt="Bitcoin Icon"
            className="w-9 aspect-square"
          />
          <div className="flex pl-2 mt-1">
            <div className="text-2xl font-semibold text-slate-900">{coinsData.name}</div>
            <div className=" font-medium m-2 text-gray-500 uppercase ">{coinsData.symbol}</div>
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="px-2 py-1.5 text-base font-medium leading-5 text-white bg-slate-500 rounded-lg border border-slate-500">
            Rank #1
          </div>
        </div>
      </header>
      <div className="flex gap-5 mb-6 justify-between mt-5 max-w-full w-[583px] sm:flex-wrap">
        <PriceSummary price={price?.usd} currency={price?.inr} />
        <div className="flex flex-col flex-1 justify-center items-start self-start py-px pr-16 font-medium whitespace-nowrap">
          <div className="flex gap-3 justify-center py-1">
            <div className={`px-2.5 py-1.5 text-base text-center ${
                  changeType(coinsData) === "positive"
                    ? "text-emerald-400 bg-emerald-100"
                    : "text-red-400 bg-red-100"
                }  bg-emerald-50 rounded flex items-center gap-2`}>
            
              <div>{coinsData?.usd_24h_change?.toFixed(2)}%</div>
            </div>
            <div className=" text-gray-400 mt-1 ">(24h)</div>
          </div>
        </div>
      </div>
      <TradingViewWidget />
    </section>
  );
};

export default CryptodDetailsDashBoard;
