import React from 'react';
// * redux
import { useDispatch } from 'react-redux';
// * icons
import {
  BsCheckCircle, BsCheckCircleFill, BsSuitHeart, BsSuitHeartFill,
} from 'react-icons/bs';
import { BiSolidEdit } from 'react-icons/bi';
// * components
import { ButtonIconCardBook } from '../../common/Button';
import { openModalEditBook } from '../../../../redux/slices/modal-open-slices';
// * reducers
import { completedBook, favoritedBook } from '../../../../redux/slices/bookshelf-slices';
// * helper / utils
import triggerToast from '../../../../helper/trigger-toast';

export default function ButtonActionSection({ book, toastFavoritedBookRef, toasCompletedBookRef }) {
  const dispatch = useDispatch();

  const handleFavoriteBook = () => {
    dispatch(favoritedBook({ id: book?.id, bookIsFavorited: !book?.isFavorited }));

    if (book?.isFavorited) {
      toastFavoritedBookRef.current.children[1].innerText = `Buku ${book?.title} dihapus dari favorit`;
    } else {
      toastFavoritedBookRef.current.children[1].innerText = `Buku ${book?.title} ditambahkan ke favorit`;
    }

    triggerToast(toastFavoritedBookRef);
  };

  const handleCompletedBook = () => {
    dispatch(completedBook({ id: book?.id, bookIsCompleted: !book?.isCompleted }));

    if (book?.isCompleted) {
      toasCompletedBookRef.current.children[1].innerText = `Buku ${book?.title} status ongoing`;
    } else {
      toasCompletedBookRef.current.children[1].innerText = `Buku ${book?.title} status selesai`;
    }

    triggerToast(toasCompletedBookRef);
  };

  return (
    <section
      className="flex flex-col fixed bottom-1/2 right-6 translate-y-1/2 justify-center items-center gap-3 p-4 px-2 bg-fifth ring-1 ring-primary rounded-full dark:ring-dark-primary dark:bg-dark-tertiary"
    >
      <ButtonIconCardBook
        popUpMessage="Favorit"
        classNamePopUp="ring-danger text-danger -left-8"
        onClick={handleFavoriteBook}
      >
        <span className="text-danger">
          {!book?.isFavorited ? (<BsSuitHeart />) : (<BsSuitHeartFill />)}
        </span>
      </ButtonIconCardBook>

      <ButtonIconCardBook
        popUpMessage="Checklist"
        classNamePopUp="ring-success text-success -left-12"
        onClick={handleCompletedBook}
      >
        <span className="text-success dark:text-green-500 ">
          {!book?.isCompleted ? (<BsCheckCircle />) : (<BsCheckCircleFill />)}
        </span>
      </ButtonIconCardBook>

      <ButtonIconCardBook
        popUpMessage="Edit"
        classNamePopUp="ring-sky-600 text-sky-600 -left-2"
        onClick={() => dispatch(openModalEditBook({ isOpen: true, typeOpen: 'editBook', id: book?.id }))}
      >
        <span className="text-sky-600 dark:text-sky-500">
          <BiSolidEdit />
        </span>
      </ButtonIconCardBook>
    </section>
  );
}
