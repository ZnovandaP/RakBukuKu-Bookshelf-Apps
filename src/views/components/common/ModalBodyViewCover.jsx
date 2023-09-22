import React from 'react';

export default function BodyForViewCover({ book }) {
  return (
    <section className="h-full w-full flex justify-center ">
      <img
        src={book?.imageCover}
        alt={`Cover Buku ${book?.title}`}
        loading="lazy"
        className="rounded-lg shadow-md  shadow-neutral-900/50 object-cover"
      />
    </section>
  );
}
