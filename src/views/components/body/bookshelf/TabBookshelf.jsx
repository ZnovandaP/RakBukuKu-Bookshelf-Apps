import React, { useEffect, forwardRef, useRef } from 'react';
// * router
import { useLocation, NavLink } from 'react-router-dom';

export const TabBookshelfMobile = forwardRef((props, ref) => {
  const { pathname } = useLocation();
  const isRakbukuPath = pathname === '/rakbuku' || pathname === '/rakbuku/';
  const allBookLinkRef = useRef(null);

  useEffect(() => {
    if (isRakbukuPath) {
      allBookLinkRef.current.className = 'common-tab-mobile bg-primary text-neutral-100';
    } else {
      allBookLinkRef.current.className = 'common-tab-mobile text-neutral-600 hover:bg-primary hover:text-neutral-100 dark:text-neutral-200';
    }
  }, []);

  if (allBookLinkRef.current) {
    if (isRakbukuPath) {
      allBookLinkRef.current.className = 'common-tab-mobile bg-primary text-neutral-100';
    } else {
      allBookLinkRef.current.className = 'common-tab-mobile text-neutral-600 hover:bg-primary hover:text-neutral-100 dark:text-neutral-200';
    }
  }
  return (
    <ul
      ref={ref}
      className="mx-8 mt-6 hidden opacity-0 flex-col justify-center items-center divide-y divide-solid divide-neutral-500 shadow-md ring-1 ring-primary rounded-md transition-all duration-300 dark:bg-dark-secondary dark:divide-neutral-200 dark:ring-dark-primary sm:hidden"
    >
      <li className="w-full">
        <NavLink
          ref={allBookLinkRef}
          to="/rakbuku"
          className={({ isActive }) => (isActive ? 'common-tab-mobile bg-primary text-neutral-100' : 'common-tab-mobile text-neutral-600 hover:bg-primary hover:text-neutral-100 dark:text-neutral-200')}
        >
          Semua Buku
        </NavLink>
      </li>
      <li className="w-full">
        <NavLink
          to="selesaidibaca"
          className={({ isActive }) => (isActive ? 'common-tab-mobile bg-success text-neutral-100' : 'common-tab-mobile text-neutral-600 hover:bg-success hover:text-neutral-100 dark:text-neutral-200')}
        >
          Selesai Dibaca
        </NavLink>
      </li>
      <li className="w-full">
        <NavLink
          to="ongoing"
          className={({ isActive }) => (isActive ? 'common-tab-mobile bg-amber-600 text-neutral-100 ' : 'common-tab-mobile text-neutral-600 hover:bg-amber-600 hover:text-neutral-100 dark:text-neutral-200')}
        >
          Ongoing
        </NavLink>
      </li>
      <li className="w-full">
        <NavLink
          to="bukufavorit"
          className={({ isActive }) => (isActive ? 'common-tab-mobile bg-danger text-neutral-100 ' : 'common-tab-mobile text-neutral-600 hover:bg-danger hover:text-neutral-100 dark:text-neutral-200')}
        >
          Buku Favorit
        </NavLink>
      </li>
    </ul>
  );
});

export function TabBookshelf() {
  const { pathname } = useLocation();
  const isRakbukuPath = pathname === '/rakbuku' || pathname === '/rakbuku/';
  const allBookLinkRef = useRef(null);

  useEffect(() => {
    if (isRakbukuPath) {
      allBookLinkRef.current.className = 'common-tab-mobile bg-primary text-neutral-100 rounded-md -translate-y-4 px-4';
    } else {
      allBookLinkRef.current.className = 'common-tab-mobile text-neutral-600 hover:bg-primary hover:text-neutral-100 hover:shadow-md focus:bg-primary focus:text-neutral-100 focus:shadow-md rounded-3xl  px-4 dark:text-neutral-200';
    }
  }, []);

  if (allBookLinkRef.current) {
    if (isRakbukuPath) {
      allBookLinkRef.current.className = 'common-tab-mobile bg-primary text-neutral-100 rounded-md -translate-y-4 px-4';
    } else {
      allBookLinkRef.current.className = 'common-tab-mobile text-neutral-600 hover:bg-primary hover:text-neutral-100 hover:shadow-md focus:bg-primary focus:text-neutral-100 focus:shadow-md rounded-3xl  px-4 dark:text-neutral-200';
    }
  }

  return (
    <ul
      className="w-full hidden justify-center items-center gap-4 pt-4 sm:flex md:justify-start md:pl-8 lg:pl-10"
    >
      <li>
        <NavLink
          ref={allBookLinkRef}
          to="/rakbuku"
          className={({ isActive }) => (isActive ? 'common-tab-mobile bg-primary text-neutral-200 rounded-md -translate-y-4 px-4' : 'common-tab-mobile text-neutral-600 hover:bg-primary hover:text-neutral-100 hover:shadow-md focus:bg-primary focus:text-neutral-100 focus:shadow-md rounded-3xl  px-4 dark:text-neutral-200')}
        >
          Semua Buku
        </NavLink>
      </li>
      <li>
        <NavLink
          to="selesaidibaca"
          className={({ isActive }) => (isActive ? 'common-tab-mobile bg-success text-neutral-100 rounded-md -translate-y-4 px-4' : 'common-tab-mobile text-neutral-600 hover:bg-success hover:text-neutral-100 rounded-3xl hover:shadow-md px-4 focus:bg-success focus:text-neutral-100 focus:shadow-md dark:text-neutral-200')}
        >
          Selesai Dibaca
        </NavLink>
      </li>
      <li>
        <NavLink
          to="ongoing"
          className={({ isActive }) => (isActive ? 'common-tab-mobile bg-warning text-neutral-100 rounded-md -translate-y-4 px-4' : 'common-tab-mobile text-neutral-600 hover:bg-warning hover:text-neutral-100 rounded-3xl hover:shadow-md px-4 focus:bg-warning focus:text-neutral-100 focus:shadow-md dark:text-neutral-200')}
        >
          Ongoing
        </NavLink>
      </li>
      <li>
        <NavLink
          to="bukufavorit"
          className={({ isActive }) => (isActive ? 'common-tab-mobile bg-danger text-neutral-100 rounded-md -translate-y-4 px-4' : 'common-tab-mobile text-neutral-600 hover:bg-danger hover:text-neutral-100 rounded-3xl hover:shadow-md px-4 focus:bg-danger focus:text-neutral-100 focus:shadow-md dark:text-neutral-200')}
        >
          Buku Favorit
        </NavLink>
      </li>
    </ul>
  );
}
