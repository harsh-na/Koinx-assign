import React, { useRef, useState, useEffect } from "react";
import { GrNext } from "react-icons/gr";
import { IoIosArrowBack } from "react-icons/io";

const CoinCard = ({
  imgSrc,
  symbol,
  change,
  changeType,
  price,
  chartSrc,
  chartAlt,
}) => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      const corsAnywhereUrl = "https://cors-anywhere.herokuapp.com/";
      const url = corsAnywhereUrl + chartSrc;

      try {
        const response = await fetch(url);
        if (response.ok) {
          const blob = await response.blob();
          const objectUrl = URL.createObjectURL(blob);
          setImageUrl(objectUrl);
        } else {
          console.error("Failed to fetch image:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchImage();
  }, [chartSrc]);

  return (
    <div className="flex flex-none flex-col md:w-60 md:px-4 md:py-5 rounded-xl border border-solid border-gray-300">
      <div className="flex justify-between">
        <div className="flex items-start gap-2 text-neutral-800">
          <img
            loading="lazy"
            src={imgSrc}
            className="w-[26px] aspect-square"
            alt=""
          />
          <div>{symbol}</div>
        </div>
        <div
          className={`${
            changeType === "positive"
              ? "text-emerald-400 bg-emerald-500"
              : "text-red-400 bg-red-400"
          } flex px-2 py-1 my-auto text-xs rounded-sm bg-opacity-10`}
        >
          {change}
        </div>
      </div>
      <div className="mt-3 text-xl font-medium leading-6 text-neutral-900">
        {price}
      </div>
      {imageUrl && (
        <img
          src={imageUrl}
          alt={chartAlt}
          className="self-center max-w-full aspect-[2.33] w-[140px]"
        />
      )}
    </div>
  );
};

const Carousel = ({ children }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      if (direction === "left") {
        current.scrollBy({ left: -300, behavior: "smooth" });
      } else {
        current.scrollBy({ left: 300, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="relative flex items-center">
      <button
        onClick={() => scroll("left")}
        className="absolute -left-4 p-3 text-xl bg-white shadow-lg text-black rounded-full focus:outline-none"
      >
        <IoIosArrowBack className="text-black" />
      </button>
      <div
        className="flex gap-4 overflow-x-auto no-scrollbar w-full"
        ref={scrollRef}
      >
        {children}
      </div>
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 p-3 text-xl bg-white shadow-lg text-black rounded-full focus:outline-none"
      >
        <GrNext />
      </button>
    </div>
  );
};

const FooterTrendingCarousel = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/search/trending"
        );
        const data = await response.json();
        setTrendingCoins(data.coins);
      } catch (error) {
        console.error("Error fetching trending coins:", error);
      }
    };
    fetchTrendingCoins();
  }, []);

  return trendingCoins?.length > 0 ? (
    <div className="flex flex-col md:pb-12 bg-white">
      <div className="flex flex-col mx-4 pt-12 pb-8 bg-white md:px-5 md:max-w-full">
        <header>
          <h2 className="text-2xl font-semibold leading-9 text-neutral-800">
            You May Also Like
          </h2>
        </header>
        <Carousel>
          {trendingCoins.map((coin, index) => (
            <CoinCard
              key={index}
              imgSrc={coin?.item?.small}
              symbol={coin.item.symbol}
              change={coin?.item?.data.price_change_percentage_24h?.usd?.toFixed(
                3
              )}
              changeType={
                coin.item.data.price_change_percentage_24h.usd?.toFixed(2) > 0
                  ? "positive"
                  : "negative"
              }
              price={coin.item.data.price}
              chartSrc={coin?.item?.data?.sparkline}
              chartAlt={coin.item.name}
            />
          ))}
        </Carousel>
        <header>
          <h2 className="mt-8 text-2xl font-semibold leading-9 text-neutral-800">
            Trending Coins
          </h2>
        </header>
        <Carousel>
          {trendingCoins.map((coin, index) => (
            <CoinCard
              key={index}
              imgSrc={coin.item.small}
              symbol={coin.item.symbol}
              change={coin?.item?.data.price_change_percentage_24h?.usd.toFixed(
                3
              )}
              changeType={
                coin.item.data.price_change_percentage_24h.usd.toFixed(2) > 0
                  ? "positive"
                  : "negative"
              }
              price={coin.item.data.price}
              chartSrc={coin?.item?.data?.sparkline}
              chartAlt={coin.item.name}
            />
          ))}
        </Carousel>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default FooterTrendingCarousel;