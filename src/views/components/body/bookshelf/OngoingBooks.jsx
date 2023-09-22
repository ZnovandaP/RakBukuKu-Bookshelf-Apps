import React, { useRef } from 'react';
// * redux
import { useSelector } from 'react-redux';
// * icons
import { AiTwotoneDelete } from 'react-icons/ai';
import { BsSuitHeartFill } from 'react-icons/bs';
import { FaBook } from 'react-icons/fa6';
// * components
import TitleContent from '../../common/TitleContent';
import BooksEmptyMessage from './BooksEmptyMessage';
import { CardBook, CardBookContainer } from '../../common/CardBook';
import Toast from '../../common/Toast';

export default function OngoingBooks() {
  const bookshelf = useSelector((state) => state.bookshelf.shelf);
  const booksIsOngoing = bookshelf.filter((book) => !book.isCompleted);
  const toastDeletedBookRef = useRef(null);
  const toastFavoritedBookRef = useRef(null);
  const toastCompletedBookRef = useRef(null);

  return (
    <section className="flex flex-col justify-center items-center min-h-full px-8 pb-14 md:px-10">
      <TitleContent text="Buku Ongoing" brand="RakBukuKu" />
      {booksIsOngoing.length < 1 && (<BooksEmptyMessage message="Data Buku Ongoing Kosong" />)}
      {booksIsOngoing.length > 0
        && (
        <CardBookContainer>
          {booksIsOngoing.map((book) => (
            <CardBook key={book.id}>
              <CardBook.Head book={book} />
              <CardBook.Body book={book} />
              <CardBook.Footer
                book={book}
                toastDeletedBookRef={toastDeletedBookRef}
                toastFavoritedBookRef={toastFavoritedBookRef}
                toasCompletedBookRef={toastCompletedBookRef}
              />
            </CardBook>
          ))}
        </CardBookContainer>
        )}
      {/* toast */}
      <Toast
        ref={toastDeletedBookRef}
        icon={<AiTwotoneDelete />}
        classNameIcon="text-success"
        text="Data Buku Berhasil Dihapus"
      />
      <Toast
        ref={toastFavoritedBookRef}
        icon={<BsSuitHeartFill />}
        classNameIcon="text-danger text-2xl"
        text="Buku Favorite Ditambahkan"
      />
      <Toast
        ref={toastCompletedBookRef}
        icon={<FaBook />}
        classNameIcon="text-success text-2xl"
        text="Buku checklist"
      />
    </section>
  );
}
