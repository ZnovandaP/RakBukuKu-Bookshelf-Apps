import React from 'react';

export default function TitleContent({ text, brand, additionalText }) {
  return (
    <h2 className="text-xl text-center text-neutral-600 font-bold tracking-wide dark:text-neutral-100 lg:text-2xl">
      {text}
      {' '}
      <span
        className="font-head text-[1.75rem] text-primary dark:text-dark-primary lg:text-3xl"
      >
        {brand}
      </span>
      {additionalText}
    </h2>
  );
}

export function SubTitle({ children }) {
  return (
    <h3
      className="text-lg font-semibold text-neutral-700 dark:text-neutral-300 first-letter:text-primary first-letter:text-3xl first-letter:font-head dark:first-letter:text-dark-primary"
    >
      {children}
    </h3>
  );
}
