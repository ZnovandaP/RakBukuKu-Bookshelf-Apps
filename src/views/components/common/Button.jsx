import React, { forwardRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { BsFillSendFill, BsMoonFill, BsSunFill } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import { toggleDarkMode } from '../../../redux/slices/dark-mode-slices';

export const ButtonPrimary = forwardRef((props, ref) => {
  const {
    onHandleClick, children, className, type, disabled,
  } = props;
  return (
    <button
      disabled={disabled}
      ref={ref}
      type={type ? 'submit' : 'button'}
      onClick={onHandleClick}
      className={`${className} group button dark:hover:bg-dark-tertiary`}
    >
      <span className="ml-5">{children}</span>
      <span className="ml-0 scale-0 group-hover:ml-2 group-hover:scale-100 group-focus:ml-2 group-focus:scale-100 transition-all duration-300 text-base">
        <BsFillSendFill />
      </span>
    </button>
  );
});

export function ButtonLink({ to, text, className }) {
  return (
    <Link
      to={to}
      className={`${className} group button`}
    >
      <span className="ml-5">{text}</span>
      <span className="ml-0 scale-0 group-hover:ml-2 group-hover:scale-100 group-focus:ml-2 group-focus:scale-100 transition-all duration-300 text-xl">
        <HiArrowNarrowRight />
      </span>
    </Link>
  );
}

export function ToggleButton({
  isOpen, setIsOpen, iconClose, iconOpen, className,
}) {
  const [fade, setFade] = useState(true);

  const handleToggleOpen = () => {
    setFade(false);
    setTimeout(() => { setFade(true); }, 300);
    setIsOpen(!isOpen);
  };

  return (
    <button
      type="button"
      name="Toggle button"
      onClick={handleToggleOpen}
      className={`flex justify-center items-center text-primary rounded-md text-4xl min-h-[44px] min-w-[44px] border-2 border-transparent hover:border-2 hover:border-primary transition-all duration-300 ease-in-out sm:hidden dark:text-dark-primary dark:hover:border-dark-primary focus:border-2 focus:border-primary dark:focus:border-dark-primary ${className}`}
    >
      <IconContext.Provider
        value={{ className: `transition-all duration-300 ease-in-out ${fade ? 'scale-1' : 'scale-0'}` }}
      >
        {!isOpen ? iconClose : iconOpen }
      </IconContext.Provider>
    </button>
  );
}

export function ToggleSwitchDarkMode() {
  const isDarkMode = useSelector((state) => state.darkMode.value);
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      name="Toggle Switch Dark Mode"
      onClick={() => dispatch(toggleDarkMode({ darkMode: !isDarkMode }))}
      className="h-5 w-[50px] py-2 bg-fourth rounded-2xl relative flex items-center hover:scale-110 focus:outline-dashed  transition-all duration-300 ease-in-out dark:bg-dark-tertiary"
    >
      <label htmlFor="switch">
        <input
          id="switch"
          type="checkbox"
          checked={isDarkMode}
          onChange={() => dispatch(toggleDarkMode({ darkMode: !isDarkMode }))}
          className="peer cursor-pointer block h-7 w-full opacity-0 absolute top-0 z-10"
        />
        <div className="flex justify-center items-center h-7 w-7 rounded-full bg-primary transition-all duration-300 ease-in-out peer-checked:translate-x-[110%] dark:bg-dark-primary">
          <IconContext.Provider value={{ className: 'text-neutral-100' }}>
            {isDarkMode ? (<BsMoonFill />) : (<BsSunFill />)}
          </IconContext.Provider>
        </div>
      </label>
    </button>
  );
}

export function ButtonModalForAddBook(props) {
  const {
    handleClick, icon, classNameIcon, classNameButton,
  } = props;
  return (
    <button
      title="Menambahkan Data Buku"
      type="button"
      className={`group fixed bottom-10 right-7 z-[3] shadow-md shadow-neutral-700 flex justify-center items-center bg-primary w-14 h-14 rounded-full hover:bg-secondary hover:scale-105 focus:outline-dashed focus:outline-neutral-500 focus:outline-offset-4 dark:bg-dark-primary dark:hover:opacity-90 transition-all duration-300 ${classNameButton}`}
      onClick={handleClick}
    >
      <span
        className="absolute -top-16 -left-[90px]  scale-0 text-sm w-40  tracking-wide font-medium px-4 py-2 rounded-full bg-neutral-50 ring-1 group-hover:scale-100 z-[2] dark:group-hover:bg-neutral-200 transition-all duration-300 delay-100 text-primary ring-primary dark:text-[#f503ff] dark:ring-[#f503ff]"
      >
        Tambahkan Data Buku
      </span>
      <span className={`${classNameIcon} text-3xl text-neutral-100 dark:text-white`}>
        {icon}
      </span>
    </button>
  );
}

export function ButtonIconCardBook({
  children, onClick, popUpMessage, classNamePopUp,
}) {
  return (
    <button
      className="group relative text-2xl p-2 rounded-full hover:shadow-md hover:shadow-neutral-400 hover:bg-neutral-100 focus:shadow-md focus:shadow-neutral-400 focus:bg-neutral-100 transition-all duration-300 dark:hover:bg-neutral-300 dark:hover:shadow-none dark:focus:shadow-none"
      type="button"
      onClick={onClick}
    >
      <span
        className={`absolute -top-10 -left-5 scale-0 text-sm  tracking-wide font-medium px-4 py-2 rounded-full bg-neutral-50 ring-1 group-hover:scale-100 z-[2] dark:group-hover:bg-neutral-200 transition-all duration-300 delay-100  ${classNamePopUp}`}
      >
        {popUpMessage}
      </span>
      {children}
    </button>
  );
}

export function ButtonCardMenu({
  children, text, className, onClick,
}) {
  return (
    <button
      type="button"
      className={`w-full flex justify-center items-center gap-2  font-medium tracking-wide px-4 py-2 hover:text-neutral-50 ${className} transition-all duration-300`}
      onClick={onClick}
    >
      <span className="text-2xl">
        {children}
      </span>
      {text}
    </button>
  );
}
