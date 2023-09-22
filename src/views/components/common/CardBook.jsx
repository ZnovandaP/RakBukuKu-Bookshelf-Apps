import React, {
  useState, useEffect, useRef,
} from 'react';
// * redux
import { useDispatch } from 'react-redux';
// * router
import { Link, useNavigate } from 'react-router-dom';
// * icon
import {
  BsCheckCircle, BsCheckCircleFill, BsSuitHeart, BsSuitHeartFill,
} from 'react-icons/bs';
import { BiLinkExternal, BiSolidEdit } from 'react-icons/bi';
import { AiTwotoneDelete } from 'react-icons/ai';
import { CgMoreR } from 'react-icons/cg';
import { FaRegRectangleXmark } from 'react-icons/fa6';
// * components
import { ButtonCardMenu, ButtonIconCardBook } from './Button';
// * reducer
import { openModalEditBook } from '../../../redux/slices/modal-open-slices';
import { deleteBook, completedBook, favoritedBook } from '../../../redux/slices/bookshelf-slices';
// * helper
import triggerToast from '../../../helper/trigger-toast';

export function CardBookContainer({ children }) {
  return (
    <section className="w-full grid grid-cols-1 gap-6 pt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {children}
    </section>
  );
}

export function CardBook({ children }) {
  return (
    <div className="bg-fifth flex flex-col gap-3 rounded-lg shadow-md shadow-neutral-500 overflow-hidden dark:bg-dark-tertiary ">
      {children}
    </div>
  );
}

function Head({ book }) {
  return (
    <section className="overflow-hidden">
      <Link
        className="block group relative overflow-hidden"
        to={`/detailbuku/${book.title.split(' ').join('')}/${book.id}`}
      >
        <img
          className="w-full h-52 object-cover object-center rounded-tr-lg rounded-tl-lg group-hover:scale-110 transition-all duration-300"
          src={book.imageCover}
          alt={`Cover Buku ${book.title}`}
          loading="lazy"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-neutral-800/60 rounded-tr-lg rounded-tl-lg opacity-0 hover:opacity-100 group-hover:scale-100 transition-all duration-300 z-[2]">
          <h2 className="text-neutral-100 font-medium ring-1 ring-neutral-50 py-2 px-4 rounded-tl-xl rounded-br-xl">
            Lihat Rincian Buku
          </h2>
        </div>

        <div
          className={`${book.isCompleted ? 'bg-success' : 'bg-warning'} py-2 px-4 absolute top-0 right-0 flex justify-center items-center rounded-tr-lg rounded-bl-lg`}
        >
          <h2 className="text-neutral-100 font-medium">
            {book.isCompleted ? 'Selesai' : 'Ongoing'}
          </h2>
        </div>
      </Link>
    </section>
  );
}

function Body({ book }) {
  return (
    <section className="flex flex-col gap-2 px-4 h-[131px]">
      <div className="flex flex-col">
        <h2
          className="font-head text-2xl font-extrabold tracking-wide text-primary dark:text-dark-primary line-clamp-1"
        >
          {book.title}
          <span
            className="text-[12px] font-common text-neutral-500 font-medium ml-[6px] dark:text-neutral-300"
          >
            {`(${book.yearRelease})`}
          </span>
        </h2>
        <h3 className="text-neutral-600 font-bold tracking-wider text-[15px] mt-1 dark:text-neutral-50 line-clamp-1">
          {book.author}
        </h3>
      </div>

      <div className="flex-col flex gap-1">
        <p className="text-neutral-700 font-medium line-clamp-1 dark:text-neutral-200">
          {book.genre}
        </p>
        <p className="hyphens-auto line-clamp-2 font-medium text-neutral-500 tracking-wide dark:text-neutral-400">
          {book.synopsis}
        </p>
      </div>
    </section>
  );
}

function Footer({
  book, toastDeletedBookRef, toastFavoritedBookRef, toasCompletedBookRef,
}) {
  const [isOpenCardMenu, setIsOpenCardMenu] = useState(false);
  const dispatch = useDispatch();

  const handleFavoriteBook = () => {
    dispatch(favoritedBook({ id: book.id, bookIsFavorited: !book.isFavorited }));

    if (book.isFavorited) {
      toastFavoritedBookRef.current.children[1].innerText = `Buku ${book.title} dihapus dari favorit`;
    } else {
      toastFavoritedBookRef.current.children[1].innerText = `Buku ${book.title} ditambahkan ke favorit`;
    }

    triggerToast(toastFavoritedBookRef);
  };

  const handleCompletedBook = () => {
    dispatch(completedBook({ id: book.id, bookIsCompleted: !book.isCompleted }));

    if (book.isCompleted) {
      toasCompletedBookRef.current.children[1].innerText = `Buku ${book.title} status ongoing`;
    } else {
      toasCompletedBookRef.current.children[1].innerText = `Buku ${book.title} status selesai`;
    }

    triggerToast(toasCompletedBookRef);
  };

  return (
    <section className="flex relative justify-center items-center gap-2 px-4 pb-4">
      <ButtonIconCardBook
        popUpMessage="Favorit"
        classNamePopUp="ring-danger text-danger"
        onClick={handleFavoriteBook}
      >
        <span className="text-danger">
          {!book.isFavorited ? (<BsSuitHeart />) : (<BsSuitHeartFill />)}
        </span>
      </ButtonIconCardBook>

      <ButtonIconCardBook
        popUpMessage="Checklist"
        classNamePopUp="ring-success text-success"
        onClick={handleCompletedBook}
      >
        <span className="text-success dark:text-green-500 ">
          {!book.isCompleted ? (<BsCheckCircle />) : (<BsCheckCircleFill />)}
        </span>
      </ButtonIconCardBook>

      <ButtonIconCardBook
        popUpMessage={!isOpenCardMenu ? 'Menu' : 'Tutup'}
        classNamePopUp="ring-primary text-primary dark:ring-[#f503ff] dark:text-[#f503ff]"
        onClick={() => setIsOpenCardMenu(!isOpenCardMenu)}
      >
        <span className="text-primary dark:text-dark-primary">
          {!isOpenCardMenu ? (<CgMoreR />) : ((<FaRegRectangleXmark />)) }
        </span>
      </ButtonIconCardBook>

      <CardMenu
        isOpenCardMenu={isOpenCardMenu}
        book={book}
        toastDeletedBookRef={toastDeletedBookRef}
      />
    </section>
  );
}

function CardMenu({ isOpenCardMenu, book, toastDeletedBookRef }) {
  const menuRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpenCardMenu) {
      menuRef.current.classList.replace('hidden', 'flex');
      setTimeout(() => {
        menuRef.current.classList.replace('opacity-0', 'opacity-100');
      }, 400);
    } else {
      menuRef.current.classList.replace('opacity-100', 'opacity-0');
      setTimeout(() => {
        menuRef.current.classList.replace('flex', 'hidden');
      }, 200);
    }
  }, [isOpenCardMenu]);

  const handleDeleteBook = () => {
    dispatch(deleteBook({ id: book.id }));
    triggerToast(toastDeletedBookRef);
  };

  return (
    <div
      ref={menuRef}
      className="hidden opacity-0 bg-neutral-100 absolute w-40 -top-32 right-22  flex-col justify-center items-center rounded-md divide-y divide-neutral-500 ring-1 ring-neutral-600 dark:bg-neutral-300 transition-all duration-200"
    >
      <ButtonCardMenu
        text="Edit Buku"
        className="text-sky-600 hover:bg-sky-600 "
        onClick={() => dispatch(openModalEditBook({ isOpen: true, typeOpen: 'editBook', id: book.id }))}
      >
        <span className="text-2xl">
          <BiSolidEdit />
        </span>
      </ButtonCardMenu>

      <ButtonCardMenu
        text="Hapus Buku"
        className="text-danger hover:bg-danger"
        onClick={handleDeleteBook}
      >
        <span className="text-2xl">
          <AiTwotoneDelete />
        </span>
      </ButtonCardMenu>

      <ButtonCardMenu
        onClick={() => navigate(`/detailbuku/${book.title.split(' ').join('')}/${book.id}`)}
        text="Detail Buku"
        className="text-primary hover:bg-primary"
      >
        <span className="text-2xl">
          <BiLinkExternal />
        </span>
      </ButtonCardMenu>
    </div>
  );
}

CardBook.Head = Head;
CardBook.Body = Body;
CardBook.Footer = Footer;
