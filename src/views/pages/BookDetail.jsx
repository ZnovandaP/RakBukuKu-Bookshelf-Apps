import React, { useRef } from 'react';
// * react router (hook)
import { useParams } from 'react-router-dom';
// * redux
import { useDispatch, useSelector } from 'react-redux';
// * icons
import { BsCheckSquareFill, BsSuitHeartFill } from 'react-icons/bs';
// * components
import { FaBook } from 'react-icons/fa6';
import TitleContent, { SubTitle } from '../components/common/TitleContent';
import Figure from '../components/common/Figure';
import Paragraph from '../components/common/Parapraph';
import TableDetailBookSection from '../components/body/detailBook/TableDetailBookSection';
import ButtonActionSection from '../components/body/detailBook/ButtonActionSection';
import { Modal, ModalPopup } from '../components/common/Modal';
import LineDecoration from '../components/common/Decoration';
import BodyFormEditBook from '../components/common/ModalBodyEditBook';
import Toast from '../components/common/Toast';
// * reducers
import { closeModal } from '../../redux/slices/modal-open-slices';
import BodyForViewCover from '../components/common/ModalBodyViewCover';
// * custom hooks
import useSetTitle from '../../hooks/useSetTitle';

export default function BookDetail() {
  const { idBook } = useParams();
  const dispatch = useDispatch();
  const bookshelf = useSelector((state) => state.bookshelf.shelf);
  const modalIsOpen = useSelector((state) => state.modalOpen.value);
  const currentBook = bookshelf.find((book) => book.id === idBook) || null;
  const toastEditRef = useRef(null);
  const toastCompletedBookRef = useRef(null);
  const toastFavoritedBookRef = useRef(null);
  useSetTitle(currentBook);

  if (!currentBook) {
    window.location.pathname = '/404';
  }

  return (
    <>
      <section
        className="pt-[5.8rem] pb-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-y-8 lg:gap-x-6 xl:px-12"
      >
        <section className="flex flex-col justify-center items-center text-center gap-2 md:col-span-2">
          <TitleContent text="Detail Buku" brand={currentBook?.title} />
          <h4
            className="text-neutral-600 font-semibold text-base tracking-wider dark:text-neutral-300"
          >
            {currentBook?.author}
          </h4>
          <h5 className="text-neutral-500 font-medium dark:text-neutral-400">
            {`(${currentBook?.yearRelease})`}
          </h5>
        </section>

        <section className="flex flex-col gap-4 sm:px-8 md:px-0 md:pl-8 xl:px-0">
          <Figure
            source={currentBook?.imageCover}
            alt={`Cover Buku ${currentBook?.title}`}
            caption={`Cover Buku ${currentBook?.title}`}
            book={currentBook}
          />
        </section>

        <section className="px-8 flex flex-col gap-1 md:px-0 md:pr-8 xl:px-0">
          <SubTitle>
            Sinopsis
          </SubTitle>

          <Paragraph>
            {currentBook?.synopsis}
          </Paragraph>
        </section>

        <section className="px-8 flex flex-col gap-3 md:col-span-2 xl:px-0">
          <SubTitle>
            {`Detail Informasi Buku ${currentBook?.title}`}
          </SubTitle>

          <TableDetailBookSection book={currentBook} />
        </section>

      </section>

      <ModalPopup>
        <Modal.Head
          text={modalIsOpen.typeOpen === 'viewCover' ? `Cover Buku ${currentBook?.title}` : 'Mengubah Data Buku'}
          onClose={() => dispatch(closeModal({ isOpen: false, typeOpen: '', id: '' }))}
        />
        <LineDecoration className="block" />
        <Modal.Body>
          {
          modalIsOpen.typeOpen === 'editBook'
          && (<BodyFormEditBook toastRef={toastEditRef} id={modalIsOpen.id} />)
          }

          {
          modalIsOpen.typeOpen === 'viewCover'
          && (<BodyForViewCover book={currentBook} />)
          }
        </Modal.Body>
        <LineDecoration className="block" />
        <Modal.Foot />
      </ModalPopup>

      <ButtonActionSection
        book={currentBook}
        toasCompletedBookRef={toastCompletedBookRef}
        toastFavoritedBookRef={toastFavoritedBookRef}
      />

      <Toast
        ref={toastEditRef}
        icon={<BsCheckSquareFill />}
        classNameIcon="text-sky-600"
        text="Data Buku Diperbarui"
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
    </>
  );
}
