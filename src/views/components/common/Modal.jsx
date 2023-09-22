import React, { forwardRef, useEffect, useRef } from 'react';
// * redux
import { useSelector } from 'react-redux';
// * icons
import { HiXMark } from 'react-icons/hi2';

export function ModalPopup({ children }) {
  const modalIsOpen = useSelector((state) => state.modalOpen.value);
  const modalRef = useRef(null);

  useEffect(() => {
    const modalDOM = modalRef.current;
    if (modalIsOpen.isOpen) {
      modalDOM.classList.replace('hidden', 'flex');
      document.body.classList.add('overflow-y-hidden');
      setTimeout(() => {
        modalDOM.classList.replace('opacity-0', 'opacity-100');
      }, 400);
    } else {
      modalDOM.classList.replace('opacity-100', 'opacity-0');
      document.body.classList.remove('overflow-y-hidden');
      setTimeout(() => {
        modalDOM.classList.replace('flex', 'hidden');
      }, 400);
    }
  }, [modalIsOpen]);

  return (
    <OverlayModal ref={modalRef}>
      <Modal>
        {children}
      </Modal>
    </OverlayModal>
  );
}

const OverlayModal = forwardRef(({ children }, ref) => (
  <section
    ref={ref}
    className="hidden opacity-0 fixed bottom-0 top-0 left-0 right-0 justify-center items-center bg-neutral-900/70 z-10 transition-all duration-300"
  >
    {children}
  </section>
));

export function Modal({ children }) {
  return (
    <div className="modal bg-neutral-100 w-[90%] h-[92%] rounded-lg xl:w-[80%] xl:h-[85%] dark:bg-dark-secondary">
      {children}
    </div>
  );
}

function Head({ onClose, text }) {
  return (
    <section className="flex justify-between items-center h-[12%] px-4 md:px-8">
      <h2
        className="text-center text-neutral-600 tracking-wider font-bold dark:text-neutral-100 md:text-base"
      >
        {text}
      </h2>
      <button
        className="text-3xl text-neutral-600 p-1 rounded-full hover:opacity-70 focus:outline-dashed  focus:outline-neutral-500 dark:focus:outline-neutral-100 dark:text-neutral-50"
        type="button"
        onClick={onClose}
      >
        <HiXMark />
      </button>
    </section>
  );
}

function Body({ children }) {
  return (
    <section className="h-[76%] overflow-auto p-4">
      {children}
    </section>
  );
}

function Foot() {
  return (
    <section className=" flex justify-center items-center h-[12%]">
      <h2
        className="text-center text-2xl text-primary tracking-wider font-bold font-head dark:text-dark-primary"
      >
        RakBukuKu
      </h2>
    </section>
  );
}

Modal.Head = Head;
Modal.Body = Body;
Modal.Foot = Foot;
