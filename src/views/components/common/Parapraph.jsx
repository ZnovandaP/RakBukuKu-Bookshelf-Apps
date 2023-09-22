import React from 'react';

export default function Paragraph({ children }) {
  return (
    <p className="text-neutral-600 tracking-wider hyphens-auto leading-6 font-medium first-letter:text-primary first-letter:font-semibold first-letter:text-3xl first-letter:font-head indent-7 dark:text-neutral-200 dark:first-letter:text-dark-primary sm:text-justify  lg:first-letter:text-4xl">
      {children}
    </p>
  );
}
