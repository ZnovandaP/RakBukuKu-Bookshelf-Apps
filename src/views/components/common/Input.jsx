import React, { forwardRef } from 'react';

export function Label({
  htmlFor, children, text, className,
}) {
  return (
    <label htmlFor={htmlFor} className={`flex flex-col gap-2 cursor-pointer ${className}`}>
      <span
        className={`font-semibold tracking-wider text-neutral-600 dark:text-neutral-50 ${className}`}
      >
        {text}
      </span>
      {children}
    </label>
  );
}

export const Input = forwardRef(({
  id, type, placeholder, onInput, value, className, required,
}, ref) => (
  <input
    ref={ref}
    className={`input ${className}`}
    onInput={onInput}
    value={value}
    type={type}
    id={id}
    name={id}
    placeholder={placeholder}
    minLength="3"
    max="2099"
    min="0"
    required={required}
  />
));

export const TextArea = forwardRef(({
  id, placeholder, onInput, value, required,
}, ref) => (
  <textarea
    ref={ref}
    className="input py-4 h-28"
    placeholder={placeholder}
    onInput={onInput}
    value={value}
    minLength="3"
    required={required}
    id={id}
    name={id}
  />
));

export function FileInput({
  id, onChange, accept, required,
}) {
  return (
    <input
      className="input file:bg-primary"
      type="file"
      name={id}
      id={id}
      accept={accept}
      onChange={onChange}
      required={required}
    />
  );
}

export const InputErrorMessage = forwardRef(({ message }, ref) => (
  <span
    ref={ref}
    className="text-pink-600 animate-pulse tracking-wider font-medium dark:text-rose-600 hidden"
  >
    {message}
  </span>
));

export function Checkbox({
  htmlFor, text, children, onChecked, isChecked,
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="flex items-center gap-2 cursor-pointer hover:scale-105 hover:translate-x-2 focus:outline-dashed focus:outline-2 focus:outline-neutral-500 transition-all duration-300"
    >
      <span className="flex justify-center items-center text-[1.65rem] relative">
        <input
          type="checkbox"
          name={htmlFor}
          id={htmlFor}
          className="peer absolute w-[38px] h-[38px] opacity-0 cursor-pointer"
          onChange={onChecked}
          checked={isChecked}
        />
        <span className="rounded-full flex justify-center items-center peer-focus:outline-dashed peer-focus:outline-offset-2 peer-focus:outline-neutral-500 dark:peer-focus:outline-neutral-100">
          {children}
        </span>
      </span>

      <span
        className="font-semibold tracking-wider text-neutral-600 dark:text-neutral-50"
      >
        {text}
      </span>
    </label>
  );
}
