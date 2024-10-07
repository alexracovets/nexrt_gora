'use client';

import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export const CarouselOne: React.FC = ({ }) => {

  const slides = [
    {
      text: 'Обери ділянку'
    },
    {
      text: 'Забронюй'
    },
    {
      text: 'Оплати'
    },
    {
      text: 'Отримай сертифікат та подарунок'
    }
  ]

  return (
    <>
      <Carousel
        opts={{
          align: 'center',
        }}
      >
        <CarouselContent>
          {
            slides.map((item, index) => {
              return (
                <CarouselItem
                  key={index}
                  className='basis-1/3'
                >
                  <div className="
                    caouresel_gold_item overflow-hidden
                    w-[43.1rem] h-[40.5rem] flex justify-center items-center rounded-[2.5rem] text-regal-black mx-auto text-[4rem] font-spectral font-[700] uppercase
                    text-center p-[2rem] relative 
                    before:bg-[url('/pattern/pattern_white.svg')] after:bg-[url('/pattern/pattern_white.svg')]
                  "
                    style={{ background: 'linear-gradient(137.3deg,#977A50 10.32%,#DEB984 31.23%,#B89263 50.12%,#AF895C 67.34%,#D7B27B 86.35%)' }}
                  >
                    {item.text}
                  </div>
                </CarouselItem>
              )
            })
          }
        </CarouselContent>
        <CarouselPrevious className='caouresel_gold_arrow w-[5rem] h-[5rem] border-regal-beige border-[0.2rem] left-[-5rem]' />
        <CarouselNext className='caouresel_gold_arrow w-[5rem] h-[5rem] border-regal-beige border-[0.2rem] right-[-5rem]' />
      </Carousel >
    </>
  );
};
