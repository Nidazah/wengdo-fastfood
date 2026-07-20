"use client";

import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import TestimonialCard from "./TestimonialCard";
import { testimonials } from "./testimonialData";

export default function Testimonials() {
  return (
    <section className="bg-white py-28">
      <Container>
        <SectionTitle
          subtitle="Testimonials"
          title="What Our Customers Say"
        />

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          autoHeight={false}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          className="mt-16"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <TestimonialCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}