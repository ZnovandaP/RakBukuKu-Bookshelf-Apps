import React, { forwardRef } from 'react';

const Toast = forwardRef(({ icon, text, classNameIcon }, ref) => (
  <div
    ref={ref}
    className="hidden scale-0 justify-center items-center w-64 gap-4 fixed bottom-6 left-1/2 -translate-x-1/2 z-20 py-3 px-4 rounded-lg bg-neutral-100 shadow-md shadow-neutral-600 ring-1 ring-primary dark:ring-dark-primary dark:bg-dark-secondary transition-all duration-300"
  >
    <span className={`text-xl ${classNameIcon} `}>
      {icon}
    </span>
    <h3 className="font-medium text-neutral-700 dark:text-neutral-50 text-center">
      {text}
    </h3>
  </div>
));

export default Toast;
