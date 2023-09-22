import React from 'react';

export default function CardFeature({ children }) {
  return (
    <div className="flex flex-col items-center gap-3  p-4 bg-neutral-50 rounded-lg shadow-md shadow-neutral-600/60 ring-1 ring-fourth dark:bg-dark-tertiary dark:ring-dark-primary">
      {children}
    </div>
  );
}

function CFHeader({ icon, title }) {
  return (
    <div className="card-head flex flex-col items-center gap-3">
      <span className="text-3xl text-primary dark:text-dark-primary">
        {icon}
      </span>
      <h3
        className="text-center text-neutral-600 font-semibold tracking-wider dark:text-neutral-100"
      >
        {title}
      </h3>
    </div>
  );
}

function CFBody({ children }) {
  return (
    <div>
      <p
        className="text-center text-neutral-600 tracking-wider hyphens-auto leading-6 font-medium first-letter:text-primary first-letter:font-semibold first-letter:text-2xl first-letter:font-head dark:text-neutral-200 dark:first-letter:text-dark-primary "
      >
        {children}
      </p>
    </div>
  );
}

CardFeature.CFHeader = CFHeader;
CardFeature.CFBody = CFBody;
