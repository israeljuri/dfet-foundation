'use client';

import React, { useRef } from 'react';
import Container from '../Container';
import Image from 'next/image';
import { impacts } from '@/app/utils/data';

import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper/modules';
import 'swiper/css';

const Impact = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s: any, time: any, progress: any) => {
    if (progressCircle.current && progressContent.current) {
      // @ts-expect-error
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      // @ts-expect-error
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <section className="bg-slate-100 gap-5 py-10">
      <Container>
        <article className="flex flex-col md:items-center items-start justify-center gap-3 text-left md:text-center">
          <h3 className="text-3xl md:text-4xl font-bold max-w-[25ch] text-black">
            Take a look some of our impact
          </h3>
          <p className="text-gray-500 max-w-[50ch]">
            With this innovation we can wholeheartedly fulfill our dream of
            impacting the lives of many, without glitches.
          </p>
        </article>
      </Container>

      <figure className="block md:hidden px-5 relative">
        <Swiper
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={50}
          slidesPerView={1}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
        >
          {impacts.map((impact) => (
            <SwiperSlide key={impact.id}>
              <div className="border my-2 rounded-xl overflow-hidden h-[30rem]">
                <Image
                  src={impact.image}
                  alt=""
                  className="rounded-md w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div
          className="autoplay-progress bg-white rounded-full p-2 border"
          slot="container-end"
        >
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </figure>
      <figure className="hidden md:block px-5 relative">
        <Swiper
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={50}
          slidesPerView={2}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
        >
          {impacts.map((impact) => (
            <SwiperSlide key={impact.id}>
              <div className="border my-2 rounded-xl overflow-hidden h-[30rem]">
                <Image
                  src={impact.image}
                  alt=""
                  className="rounded-md w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div
          className="autoplay-progress bg-white rounded-full p-2 border"
          slot="container-end"
        >
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </figure>
    </section>
  );
};

export default Impact;
