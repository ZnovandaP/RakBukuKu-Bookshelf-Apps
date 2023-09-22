import React, { useEffect } from 'react';
// * router
import { useRouteError, Link } from 'react-router-dom';
// * assets
import ilustrationNotFoundLight from '../../assets/ilustration/404-light.svg';
import ilustrationNotFoundDark from '../../assets/ilustration/404-dark.svg';
// * custom hooks
import useSetTitle from '../../hooks/useSetTitle';

export default function PageNotFound() {
  const isDarkModeLocalStorage = JSON.parse(localStorage.getItem('DARK_THEME')) ?? false;
  const routeError = useRouteError();
  const statusError = routeError.statusText;
  const messageError = routeError.error.message;
  useSetTitle();

  useEffect(() => {
    const html = document.documentElement;
    if (isDarkModeLocalStorage) {
      html.classList.add('dark');
    }
  }, []);

  return (
    <section className="min-h-screen p-8 flex flex-col justify-center items-center gap-4">
      <img
        src={isDarkModeLocalStorage ? ilustrationNotFoundDark : ilustrationNotFoundLight}
        alt="Ilustration 404 page not found"
        className="w-full h-full sm:h-60"
      />
      <div className="flex flex-col justify-center items-center gap-2">
        <h2 className="text-3xl text text-neutral-500 font-bold tracking-wider animate-pulse dark:text-neutral-200">
          {statusError}
        </h2>
        <p className="text-center font-medium tracking-wide text-neutral-700 dark:text-neutral-300">
          {messageError}
        </p>
        <p className="flex justify-center gap-1 items-center -mt-2 text-center font-medium tracking-wide text-neutral-700 dark:text-neutral-300">
          Silahkan Kembali kehalaman
          {' '}
          <Link
            to="/"
            className="flex justify-center items-center  underline font-semibold min-h-[44px] min-w-[44px] underline-offset-4 decoration-wavy decoration-secondary text-primary dark:text-dark-primary dark:decoration-dark-tertiary"
          >
            {' '}
            Beranda
          </Link>
        </p>
      </div>
    </section>
  );
}
