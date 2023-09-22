import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from './Hero';
import Navbar from './Navbar';

export default function Header() {
  const { pathname } = useLocation();
  const navbarRef = useRef(null);
  const heroRef = useRef(null);
  const showHeroSection = pathname === '/' || pathname === '/beranda';

  useEffect(() => {
    const heroElement = heroRef.current;
    const navbarElement = navbarRef.current;

    if (!heroElement) return;

    window.addEventListener('scroll', () => {
      if (heroElement.offsetHeight - 70 < window.scrollY) {
        navbarElement.classList.remove('bg-white/5');
        navbarElement.classList.replace('border-b-[1px]', 'border-b-2');
        navbarElement.classList.add('dark:bg-dark-secondary', 'bg-fifth');
      } else {
        navbarElement.classList.replace('border-b-2', 'border-b-[1px]');
        navbarElement.classList.remove('dark:bg-dark-secondary', 'bg-fifth');
        navbarElement.classList.add('bg-white/5');
      }
    });
  }, []);

  return (
    <header>
      <Navbar ref={navbarRef} />
      <Hero
        className={!showHeroSection ? 'hidden' : ''}
        ref={heroRef}
      />
    </header>
  );
}
