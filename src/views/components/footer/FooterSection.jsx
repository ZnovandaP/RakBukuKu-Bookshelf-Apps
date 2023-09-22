import React from 'react';
import { BsBookshelf } from 'react-icons/bs';
import LineDecoration from '../common/Decoration';

const date = new Date();
const getCurrentYear = date.getFullYear();

export default function FooterSection() {
  return (
    <section className="flex flex-col gap-2  pt-7 pb-5 bg-[#a81919] dark:bg-[#160117]">
      <div className="flex flex-col gap-4 justify-center items-center ">
        <h2
          className="flex gap-2 justify-center items-center font-head text-3xl text-primary
          font-bold tracking-wide bg-fifth/90 w-[75%] py-2 rounded-tl-3xl rounded-br-3xl ring-1 ring-tertiary sm:w-[45%] md:w-[40%] lg:w-[30%] xl:w-[20%] dark:bg-dark-secondary dark:text-dark-primary dark:ring-dark-primary"
        >
          <span className="text-[1.75rem]">
            <BsBookshelf />
          </span>
          RakBukuKu
        </h2>
        <h3
          className="font-head font-bold text-neutral-50 text-xl tracking-wide dark:text-neutral-300"
        >
          Copyright
          {' '}
          <span className="font-common font-medium text-neutral-50 text-sm dark:text-neutral-300">
            &copy;
            {' '}
            {getCurrentYear}
            {' '}
            -
          </span>
          {' '}
          RakBukuKu
        </h3>
      </div>
      <LineDecoration className="bg-white" />
      <div className="">
        <div className="flex justify-center items-center gap-2">
          <p className="flex justify-center items-center gap-1 text-neutral-50 font-medium dark:text-neutral-300">
            Dibuat oleh
            <a
              href="https://znovandap-portfolio.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="flex justify-center items-center underline decoration-wavy text-neutral-50 decoration-white font-semibold underline-offset-4 tracking-wide dark:text-neutral-300 focus:outline-2 focus:no-underline focus:outline-dashed focus:outline-fifth"
            >
              Zidane Novanda Putra
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
