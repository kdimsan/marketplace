import useCarousel from "@/hooks/useCarousel";
import React from "react";
import styled from "styled-components";
import Image from "next/image";

//Swiper Carousel imports
import { register } from "swiper/element";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
register();

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 70px 0;

  .swiper-pagination-bullet-active {
    border: 1px solid #000;
    --swiper-pagination-bullet-size: 9px;
    --swiper-pagination-bullet-width: 9px;
    --swiper-pagination-bullet-height: 9px;
  }

  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default function Carousel() {
  const { banner } = useCarousel();

  return (
    <Container>
      <Swiper
        slidesPerView={1}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ dynamicBullets: true, clickable: true }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {banner.map((item) => (
          <SwiperSlide key={item.id}>
            <Image
              width={1000}
              height={300}
              src={item.image}
              alt="Banner Image"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
