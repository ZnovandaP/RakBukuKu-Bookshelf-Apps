import React from 'react';
import { useSelector } from 'react-redux';
import IlustrationBoxLight from '../../../../assets/ilustration/empty-box-light.svg';
import IlustrationBoxDark from '../../../../assets/ilustration/empty-box-dark.svg';

export default function BooksEmptyMessage({ message }) {
  const isDarkMode = useSelector((state) => state.darkMode.value);

  return (
    <section className="flex flex-col justify-center items-center">
      <img
        className="w-full sm:h-60 opacity-60 dark:opacity-[.35] "
        src={isDarkMode ? IlustrationBoxDark : IlustrationBoxLight}
        alt="Ilustrasi kotak kosong"
        loading="lazy"
      />
      <h2
        className="text-center text-lg text-neutral-600 font-semibold -mt-6 animate-pulse dark:text-neutral-100"
      >
        {message}
      </h2>
      <p
        className="text-center text-neutral-500 font-medium mt-1 dark:text-neutral-400"
      >
        Silahkan untuk mengisi data buku untuk menambahkan pada list buku
      </p>
    </section>
  );
}
