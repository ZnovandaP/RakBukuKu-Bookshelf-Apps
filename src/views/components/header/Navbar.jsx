import React, {
  useState, useRef, useEffect, forwardRef,
} from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BsBookshelf } from 'react-icons/bs';
import { HiBars3CenterLeft, HiXMark } from 'react-icons/hi2';
import { ToggleButton } from '../common/Button';
import { NavMenu, NavMenuMobile } from './NavMenu';

const Navbar = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const isDarkMode = useSelector((state) => state.darkMode.value);
  const { pathname } = useLocation();
  const showHeroSection = pathname === '/' || pathname === '/beranda';

  useEffect(() => {
    localStorage.setItem('DARK_THEME', isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    if (isOpen) {
      menuRef.current.classList.replace('hidden', 'flex');
      setTimeout(() => {
        menuRef.current.classList.replace('scale-0', 'scale-1');
      }, 250);
    } else {
      menuRef.current.classList.replace('scale-1', 'scale-0');
      setTimeout(() => {
        menuRef.current.classList.replace('flex', 'hidden');
      }, 250);
    }
  }, [isOpen]);

  return (
    <nav
      ref={ref}
      className={`fixed top-0 flex items-center justify-between z-10 w-full h-16 px-6 py-2 font-common backdrop-blur-lg ${!showHeroSection ? 'dark:bg-dark-secondary bg-fifth' : 'bg-white/5'} shadow-lg border-b-[1px] border-primary md:px-12 lg:px-14 xl:px-20 dark:border-dark-primary transition-all duration-300`}
    >
      <div>
        <Link
          to="/"
          className="hover:decoration-wavy hover:underline hover:decoration-secondary text-primary dark:text-dark-primary dark:hover:decoration-[#f503ff] focus:decoration-wavy focus:underline focus:decoration-secondary dark:focus:decoration-[#f503ff]"
        >
          <h1 className="flex justify-center items-center gap-x-2 font-head font-bold tracking-wide text-[1.75rem] ">
            <BsBookshelf />
            RakBukuKu
          </h1>
        </Link>
      </div>
      <ToggleButton
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        iconClose={(<HiBars3CenterLeft />)}
        iconOpen={(<HiXMark />)}
      />
      <NavMenuMobile ref={menuRef} />
      <NavMenu />
    </nav>
  );
});

export default Navbar;
