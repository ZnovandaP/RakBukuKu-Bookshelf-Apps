import React from 'react';
// * redux
import { useDispatch } from 'react-redux';
// * reducer
import { openModalForCover } from '../../../redux/slices/modal-open-slices';

export default function Figure({
  source, alt, caption, book,
}) {
  const dispatch = useDispatch();
  return (
    <figure className="flex flex-col justify-center item-center gap-3">
      <img
        src={source}
        alt={alt}
        loading="lazy"
        className="w-full h-60 object-cover object-center rounded-lg shadow-md shadow-neutral-950/50 ring-1 ring-primary dark:ring-dark-primary sm:h-72 lg:h-80"
      />
      <figcaption className="italic font-medium text-center text-neutral-600 rounded-lg dark:text-neutral-300">
        <button
          type="button"
          onClick={() => {
            dispatch(openModalForCover({ isOpen: true, typeOpen: 'viewCover', id: book.id }));
          }}
          className="min-h-[44px] min-w-[44px] underline underline-offset-4 decoration-wavy px-3 rounded-tr-2xl rounded-bl-2xl decoration-primary hover:font-bold focus:outline-double focus:outline-primary dark:focus:outline-dark-primary dark:decoration-dark-primary p-1 transition-all"
        >
          {caption}
        </button>
      </figcaption>
    </figure>
  );
}
