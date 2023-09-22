import React from 'react';

export function Table({ children }) {
  return (
    <table
      className="table-auto border-collapse border-[1px] border-neutral-500 w-full"
    >
      {children}
    </table>
  );
}

export function ColHead({ children, className }) {
  return (
    <th
      className={`text-left border-[1px] border-neutral-500 py-3 px-4 ${className}`}
    >
      {children}
    </th>
  );
}

export function ColBody({ children, className }) {
  return (
    <td
      className={`text-left border-[1px] border-neutral-500 py-3 px-4 ${className}`}
    >
      {children}
    </td>
  );
}
