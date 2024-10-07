'use client';

import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

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
          loop: true,
          containScroll: false
        }}
      >
        <CarouselContent>
          {
            slides.map((item, index) => {
              return (
                <CarouselItem
                  key={index}
                  className='
                  basis-1/3 bg-slate-50 w-[43.1rem] h-[40.5rem] text-regal-black flex justify-center items-center
                  
                  '
                >
                  {item.text}
                </CarouselItem>
              )
            })
          }
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel >
    </>
  );
};
