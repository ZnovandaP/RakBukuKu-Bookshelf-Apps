import React, { forwardRef, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { ToggleSwitchDarkMode } from '../common/Button';
import useHomeLinkActive from '../../../hooks/useHomeLinkActive';

export const NavMenuMobile = forwardRef((props, ref) => {
  const homeLinkRef = useRef(null);
  useHomeLinkActive(homeLinkRef);
  return (
    <ul
      ref={ref}
      className="hidden scale-0 flex-col justify-center items-center rounded-md gap-y-2 px-4 py-6 w-2/3 bg-fifth ring-1 ring-primary text-primary font-medium shadow-lg shadow-neutral-800/50 absolute top-20 right-4 transition-all duration-400 ease-in-out sm:hidden dark:text-dark-primary dark:bg-dark-secondary dark:ring-dark-primary"
    >
      <li>
        <NavLink
          ref={homeLinkRef}
          to="beranda"
          className={({ isActive }) => (isActive ? 'active' : 'nav-hover')}
        >
          Beranda
        </NavLink>
      </li>
      <li>
        <NavLink
          to="rakbuku"
          className={({ isActive }) => (isActive ? 'active' : 'nav-hover')}
        >
          Rak Buku
        </NavLink>
      </li>
      <li>
        <a
          href="http://znovandap-portfolio.netlify.app/"
          className="nav-hover"
        >
          Tentang Kami

        </a>
      </li>
      <li className="flex justify-center item-center mt-2">
        <ToggleSwitchDarkMode />
      </li>
    </ul>
  );
});

export function NavMenu() {
  const homeLinkRef = useRef(null);
  useHomeLinkActive(homeLinkRef);
  return (
    <ul
      className="hidden flex-col justify-between items-center w-[63%] text-primary tracking-wide font-medium shadow-md transition-all duration-400 ease-in-out dark:text-dark-primary sm:flex sm:scale-1 sm:static sm:flex-row  sm:shadow-none lg:w-1/2 xl:w-2/5"
    >
      <li>
        <NavLink
          ref={homeLinkRef}
          to="beranda"
          className={({ isActive }) => (isActive ? 'active' : 'nav-hover')}
        >
          Beranda
        </NavLink>
      </li>
      <li>
        <NavLink
          to="rakbuku"
          className={({ isActive }) => (isActive ? 'active' : 'nav-hover')}
        >
          Rak Buku
        </NavLink>
      </li>
      <li>
        <a
          href="http://znovandap-portfolio.netlify.app/"
          className="nav-hover"
        >
          Tentang Kami

        </a>
      </li>
      <li className="flex justify-center item-center">
        <ToggleSwitchDarkMode />
      </li>
    </ul>
  );
}
