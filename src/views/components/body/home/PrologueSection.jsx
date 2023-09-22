/* eslint-disable max-len */
import React from 'react';
// * redux
import { useSelector } from 'react-redux';
// * components
import ilustrationLight from '../../../../assets/ilustration/bookshelf-ilustration-light.svg';
import ilustrationDark from '../../../../assets/ilustration/bookshelf-ilustration-dark.svg';
import TitleContent from '../../common/TitleContent';
import Paragraph from '../../common/Parapraph';

export default function PrologueSection() {
  const isDarkMode = useSelector((state) => state.darkMode.value);
  return (
    <section className="container px-8 py-10 grid grid-cols-1 gap-6 sm:px-8 md:grid-cols-2 md:gap-8">
      <div className="image-prologue bg-fifth p-6 rounded-lg ring-1 ring-primary shadow-md shadow-neutral-800/50 dark:ring-dark-tertiary dark:bg-dark-secondary sm:h-80 md:col-start-2 md:col-end-3">
        <img
          className="w-full h-full sm:1/2"
          src={isDarkMode ? ilustrationDark : ilustrationLight}
          loading="lazy"
          alt="Ilustrasi Seseorang berada di samping rak buku"
        />
      </div>
      <div className="flex flex-col justify-center items-center md:row-start-1 md:row-end-2 ">
        <TitleContent
          text="Apa Itu"
          brand="RakBukuKu"
          additionalText="?"
        />

        <Paragraph>
          RakBukuKu merupakan Bookshelf Apps yang berbasis website. RakBukuKu memiliki fitur utama yaitu menambahakan, mengubah, menghapus data buku yang sudah anda baca. selain itu RakBukuKu memiliki fitur tambahan seperti menambahkan daftar buku yang disukai, dan buku yang sudah selesai. Walaupun berbasis web RakBukuKu dapa diinstall langsung pada browser, karena sudah mengadaptasi teknologi PWA (Progressive Web Apps)
        </Paragraph>
      </div>
    </section>
  );
}
