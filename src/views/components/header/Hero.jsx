import React, { forwardRef } from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { ButtonLink } from '../common/Button';
import heroImageData from '../../../data/hero-image';

const Hero = forwardRef((props, ref) => {
  const { className } = props;
  return (
    <section ref={ref} className={`overflow-hidden ${className}`}>
      <Splide
        hasTrack={false}
        options={{
          height: '100vh',
          autoplay: true,
          type: 'loop',
          perPage: 1,
          drag: false,
          resetProgress: false,
          arrows: false,
          lazyLoad: 'nearby',
        }}
      >
        <div className="custom-wrapper">
          <SplideTrack>
            <SlideImage />
          </SplideTrack>
          <div className="splide__progress">
            <div className="splide__progress__bar" />
          </div>
        </div>
      </Splide>
      <OverlayHero />
    </section>
  );
});

function SlideImage() {
  return (
    heroImageData.map((item) => (
      <SplideSlide key={item.id}>
        <img
          src={item.image}
          alt={item.alt}
          className="object-cover object-right-bottom"
          style={{ minWidth: '100%', minHeight: '100vh' }}
          loading="lazy"
        />
      </SplideSlide>
    ))
  );
}

function OverlayHero() {
  return (
    <div className="flex justify-center items-center absolute top-0 w-full h-screen bg-neutral-950/70 px-4 lg:pl-16">
      <div className="flex flex-col justify-center items-center gap-3 px-4 py-6 bg-white/[.07] backdrop-blur-md rounded-xl dark:ring-dark-primary hover:shadow-xl hover:shadow-primary dark:hover:shadow-dark-primary sm:px-8 md:p-10 transition-all duration-300">
        <h2
          className="text-primary font-head text-5xl font-extrabold tracking-wide dark:text-dark-primary md:text-6xl lg:text-7xl"
        >
          RakBukuKu

        </h2>
        <p
          className="text-fifth font-common text-lg text-center dark:text-neutral-100  md:text-2xl lg:text-3xl"
        >
          Digitalisasi Pustaka Pribadi yang Menyenangkan

        </p>
        <ButtonLink to="rakbuku" text="Mari Coba" className="mt-3" />
      </div>
    </div>
  );
}

export default Hero;
