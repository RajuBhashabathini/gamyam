import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Card = ({ data }) => {
  console.log("data 0000", data);
  return (
    <div key={data?.id} className="relative flex flex-col ">
      <div
        className="absolute w-full flex justify-between  top-4  gap-3 z-10
        "
      >
        <div className="">
          {data.tags.some((ele) => ele.tag_type === "highway_facing") ? (
            <div className="bg-yellow-300  flex gap-2 rounded-r-full pr-2">
              <img src="https://1acre.in/static/images/icons/chance-icon.svg" />
              Highway
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="flex flex-row gap-3 ">
          <img
            className="bg-white rounded-full p-2 cursor-pointer"
            src="https://1acre.in/static/images/icons/share.svg"
            alt="share"
          />
          <img
            className="bg-white rounded-full p-2 cursor-pointer"
            src="https://1acre.in/static/images/icons/favorite.svg"
            alt="wishlist"
          />
        </div>
      </div>
      <div className="carousel-part">
        {data?.land_media.length > 0 ? (
          <>
            <Carousel controls={true} indicators={false} interval={null}>
              {data?.land_media.map((element) => {
                return (
                  <Carousel.Item key={element?.image}>
                    <img
                      loading="lazy"
                      className=" max-h-60 w-[100%] min-h-60 "
                      src={element?.image}
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      {element.category === "approach_road" ? (
                        <p className="flex flex-wrap justify-end items-end bg-black text-white">
                          Approach Road
                        </p>
                      ) : element.category === "fencing" ? (
                        <p className="flex justify-end items-end bg-black text-white">
                          Fencing
                        </p>
                      ) : null}
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </>
        ) : (
          <img className="max-h-60 w-[100%] min-h-60 " src="" alt="" />
        )}
      </div>
      <div className="p-3 text-part ">
        <div className="font-bold text-[14px] lg:text-[18px] md:text-[18px] flex  gap-3 items-center">
          {data.village_name},{data.mandal_name}{" "}
          <img src="https://1acre.in/static/images/icons/verified-active.svg" />
        </div>
        <div className="font-bold text-[14px] lg:text-[18px] md:text-[18px]">
          {data.district_name}
          {"(dt)"}
        </div>
        <div className="flex flex-row items-center gap-2">
          {data.total_land_size_in_acres.acres > 0.0 ? (
            <>
              <p className=" text-[14px] lg:text-[18px] md:text-[18px]  ">
                {data.total_land_size_in_acres.acres} {""}
                {"Acres ."} {""}
              </p>
              {"₹ "}
              <p className=" text-[14px] lg:text-[18px] md:text-[18px]  ">
                {data.price_per_acre / 100} crores per acre
              </p>
            </>
          ) : (
            <>
              <p className="font-bold text-[14px] lg:text-[18px] md:text-[18px]">
                {data.total_land_size_in_acres.guntas} {"Guntas ."} {"₹ "}{" "}
              </p>
              {data.total_price > 100 ? (
                <p className=" font-normal text-[14px] lg:text-[18px] md:text-[18px]">
                  {data.total_price / 100} crores for full property
                </p>
              ) : (
                <p className="font-normal text-[14px] lg:text-[18px] md:text-[18px]">
                  {data.total_price.toFixed(2)} lakhs for full property
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
