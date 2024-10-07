"use client"

import { AsideHome } from "@/components/shared/asideHome";
import { CarouselOne } from "@/components/shared/carouselOne";
import { Container } from "@/components/shared/container";
import { Experience } from "@/components/shared/experience";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Project() {

  const scrollToMap = () => {
    const mapSection = document.getElementById('map');
    if (mapSection) {
      mapSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="max-w-full grow">
        <Container className="py-[10rem] max-md:py-[5rem]">
          <div className="
          relative border-[0.2rem] border-regal-beige w-[65rem] h-[65rem] max-h-[77dvh] mx-auto p-[0.5rem]
          before:content-['•'] before:absolute before:absolute before:left-[0.5rem] before:top-[0.5rem] before:flex before:justify-center before:items-center before:text-regal-beige before:border-[0.2rem] before:border-regal-beige before:w-[1.4rem] before:h-[1.4rem]
          after:content-['•'] after:absolute after:absolute after:right-[0.5rem] after:top-[0.5rem] after:flex after:justify-center after:items-center after:text-regal-beige after:border-[0.2rem] after:border-regal-beige after:w-[1.4rem] after:h-[1.4rem]
          max-md:w-[35rem] max-md:h-[35rem]
          
          ">
            <div className="
            relative border-[0.2rem] border-regal-beige p-[4rem] w-full h-[63.6rem] flex justify-center items-center flex-col
            before:content-['•'] before:absolute before:absolute before:left-[-0.2rem] before:bottom-[-0.2rem] before:flex before:justify-center before:items-center before:text-regal-beige before:border-[0.2rem] before:border-regal-beige before:w-[1.4rem] before:h-[1.4rem]
            after:content-['•'] after:absolute after:absolute after:right-[-0.2rem] after:bottom-[-0.2rem] after:flex after:justify-center after:items-center after:text-regal-beige after:border-[0.2rem] after:border-regal-beige after:w-[1.4rem] after:h-[1.4rem]
            max-md:h-[33.6rem] max-md:p-[2rem]
          ">
              <h1 className="
              text-[15rem] text-center text-regal-white font-playfair font-[700] uppercase mb-[4rem] max-md:mb-[3rem] max-md:text-[3.2rem]
              max-md:text-[9rem]
              ">
                Г<span className="font-playfair italic text-regal-beige text-[16rem] pr-[0.2rem] max-md:text-[10rem]">о</span>ра
              </h1>
              <div className="
              text-[5.5rem] uppercase text-center font-[600] font-spectral mb-[4rem] mx-auto max-md:text-[2.5rem] max-md:w-full
              max-md:text-[2.8rem]
              ">
                Громадська <span className="text-[8rem] font-spectral text-regal-beige max-md:text-[4rem]">опікунська</span> рада Афону
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="max-w-full grow">
        <Container className="py-[10rem] max-md:py-[5rem]">
          <div className="relative border-[0.2rem] border-regal-beige max-w-[120rem] mx-auto flex justify-center items-center flex-col text-center p-[4rem] 
            max-md:px-[1rem]
            max-md:py-[3rem]
          ">
            <h3 className="
              quote block w-full text-[6rem] font-spectral font-[700] uppercase mb-[4rem] relative 
              before:absolute before:left-0 before:top-0 before:font-spectral before:italic
              after:absolute after:right-0 after:bottom-0 after:font-spectral after:italic
              max-md:text-[3rem] max-md:p-[0rem] max-md:mb-[3rem]
            ">
              Ділити чесноту з іншими означає її багаторазово множити
            </h3>
            <p className="
              text-[4rem] font-spectral font-[700] uppercase text-regal-beige 
              max-md:text-[2.5rem]
            ">
              З тебе почнеться історія! Історія ГОРИ!
            </p>
          </div>
        </Container>
      </section>
      <section id='map'>
        <Container className="py-[10rem] max-w-full flex justify-between items-center w-full h-[85dvh] h-full grow max-md:p-0">
          <Experience />
          <AsideHome />
        </Container>
      </section>
      <section>
        <Container className="py-[10rem] max-md:py-[5rem]">
          <h2 className='text-[7rem] text-center text-regal-beige font-spectral font-[700] uppercase mb-[12rem] max-md:mb-[3rem] max-md:text-[3.2rem]'>
            Як це працює
          </h2>
          <div className="w-[150rem] mx-auto mb-[10rem] max-md:w-full">
            <CarouselOne />
          </div>
          <Button onClick={scrollToMap}>
            Стати Опікуном
          </Button>
        </Container>
      </section>
      <section>
        <Container className="py-[10rem] max-md:py-[5rem]">
          <h2 className='text-[7rem] text-center text-regal-beige font-spectral font-[700] uppercase mb-[12rem] max-md:mb-[3rem] max-md:text-[3rem]'>
            Встигни потрапити до першого тому ГОРИ на Афоні
          </h2>
          <div className="text-[4rem] text-center mb-[10rem] font-spectral font-[500] max-w-[140rem] mx-auto max-md:text-[2rem]">
            Ви станете тією людиною, хто творить історію – вперше з 18 століття відбудовується
            осередок українства на Афоні. Відкрий свою сторінку історії!
          </div>
          <div className="relative w-[116.6rem] h-[65.2rem] mx-auto mb-[10rem] rounded-[3rem] overflow-hidden max-md:w-full max-md:h-[19.57rem] max-md:rounded-[1rem]">
            <Image
              src="/img/books.jpg"
              fill
              alt="Books" />
          </div>

          <Button variant='default' size='default' onClick={scrollToMap} >
            Стати Опікуном
          </Button>
        </Container>
      </section>
    </>
  );
}
