import React from 'react';

export default function LineDecoration({ className }) {
  return <span className={`w-full h-[2px] bg-primary dark:bg-dark-primary ${className}`} />;
}
