"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import images, { destination } from "./images";
import Link from "next/link";

export default function CustomCarousel() {
  const swiperRef = useRef(null);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className="grid lg:grid-cols-[450px,1fr] justify-center gap-8 border-2 p-5 h-[80vh] py-6">
      {/* Left container with heading, paragraph, and controls */}
      <div className="p-4  flex flex-col justify-center">
        <div className="space-y-3">
          <h1 className="text-5xl font-bold">Best Trip Prices</h1>
          <p className="text-xl">Bringing you more routes at the best fares.</p>
        </div>
        <div className="mt-5 flex items-center space-x-2 px-6 py-1">
          <button
            className="text-2xl text-white bg-black py-1 px-4 rounded-full"
            onClick={goPrev}
          >
            ←
          </button>
          <button
            className="text-2xl text-white bg-black py-1 px-4 rounded-full"
            onClick={goNext}
          >
            →
          </button>
        </div>
      </div>

      {/* Right container with Swiper */}
      <div className="cursor-grab overflow-hidden select-none flex-grow">
        <Swiper
          slidesPerView={1}
          spaceBetween={5}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={false}
          navigation={false}
          modules={[Autoplay]}
          className="mySwiper p-0"
          ref={swiperRef}
          breakpoints={{
            // For mobile devices
            768: {
              slidesPerView: 3,
            },
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide className="p-2 relative" key={image}>
              <Image
                src={image}
                alt=""
                className="w-full h-full rounded-xl pointer-events-none"
              />
              <div className="absolute bottom-0 left-0 w-full h-max bg-transparent backdrop-blur-[5px] mx-2 px-4 py-6">
                <p className="text-white text-lg mb-6 text-center">
                  {destination[index].title}
                </p>
                <Link
                  href="/login"
                  className="bg-blue-500 text-sm text-center text-white rounded-md py-3 px-6"
                >
                  Book Now
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
