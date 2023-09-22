import React, {
  useState, useRef, useEffect,
} from 'react';
// * redux
import { useDispatch, useSelector } from 'react-redux';
// * router
import { Outlet } from 'react-router-dom';
// * icons
import { MdFilterListAlt } from 'react-icons/md';
import { BiSolidBookAdd } from 'react-icons/bi';
import { HiXMark } from 'react-icons/hi2';
import { BsCheckSquareFill } from 'react-icons/bs';
// * components
import { ModalPopup, Modal } from '../components/common/Modal';
import BodyFormAddBook from '../components/common/ModalBodyAddBook';
import { ToggleButton, ButtonModalForAddBook } from '../components/common/Button';
import { TabBookshelf, TabBookshelfMobile } from '../components/body/bookshelf/TabBookshelf';
import TitleContent from '../components/common/TitleContent';
import LineDecoration from '../components/common/Decoration';
import Toast from '../components/common/Toast';
// * reducer
import { openModalAddBook, closeModal } from '../../redux/slices/modal-open-slices';
import BodyFormEditBook from '../components/common/ModalBodyEditBook';
import useSetTitle from '../../hooks/useSetTitle';

export default function Bookshelf() {
  const bookshelf = useSelector((state) => state.bookshelf.shelf);
  const modalIsOpen = useSelector((state) => state.modalOpen.value);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const tabBookshelfMobileRef = useRef(null);
  const toastAddRef = useRef(null);
  const toastEditRef = useRef(null);
  useSetTitle();

  useEffect(() => {
    if (bookshelf.length > 0) {
      localStorage.setItem('BOOKSHELF', JSON.stringify(bookshelf));
    }
  }, [bookshelf]);

  useEffect(() => {
    const tabBookshelfMobileDOM = tabBookshelfMobileRef.current;
    if (isOpen) {
      tabBookshelfMobileDOM.classList.replace('hidden', 'flex');
      setTimeout(() => {
        tabBookshelfMobileDOM.classList.replace('opacity-0', 'opacity-100');
      }, 400);
    } else {
      tabBookshelfMobileDOM.classList.replace('opacity-100', 'opacity-0');
      setTimeout(() => {
        tabBookshelfMobileDOM.classList.replace('flex', 'hidden');
      }, 400);
    }
  }, [isOpen]);

  return (
    <div className="pt-[5.8rem] grid grid-cols-1 gap-5">
      <TitleContent text="Inilah" brand="RakBukuKu" />

      <ButtonModalForAddBook
        icon={(<BiSolidBookAdd />)}
        handleClick={() => dispatch(openModalAddBook({ isOpen: true, typeOpen: 'addBook', id: '' }))}
      />

      <ModalPopup>
        <Modal.Head
          text={modalIsOpen.typeOpen === 'addBook' ? 'Menambahkan Data Buku' : 'Mengubah Data Buku'}
          onClose={() => dispatch(closeModal({ isOpen: false, typeOpen: '', id: '' }))}
        />
        <LineDecoration className="block" />

        <Modal.Body>
          {
          modalIsOpen.typeOpen === 'addBook'
          && (<BodyFormAddBook toastRef={toastAddRef} />)
          }

          {
          modalIsOpen.typeOpen === 'editBook'
          && (<BodyFormEditBook toastRef={toastEditRef} id={modalIsOpen.id} />)
          }
        </Modal.Body>

        <LineDecoration className="block" />
        <Modal.Foot />
      </ModalPopup>

      <Toast
        ref={toastAddRef}
        icon={<BiSolidBookAdd />}
        classNameIcon="text-success"
        text="Data Buku Baru Ditambahkan"
      />

      <Toast
        ref={toastEditRef}
        icon={<BsCheckSquareFill />}
        classNameIcon="text-sky-600"
        text="Data Buku Diperbarui"
      />

      <section
        className="flex flex-col"
      >
        <ToggleButton
          iconClose={(<MdFilterListAlt />)}
          iconOpen={(<HiXMark />)}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          className="bg-fifth shadow-md border-none hover:ring-1 hover:ring-primary focus:ring-1 focus:ring-primary mx-4 dark:bg-dark-secondary dark:hover:ring-dark-primary dark:focus:ring-dark-primary "
        />

        <TabBookshelfMobile ref={tabBookshelfMobileRef} />
        <TabBookshelf />
        {/* main */}
        <LineDecoration className="w-full mt-6 sm:mt-4 bg-neutral-600 dark:bg-neutral-300" />
      </section>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
