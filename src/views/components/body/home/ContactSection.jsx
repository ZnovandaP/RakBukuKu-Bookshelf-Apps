import React, { useRef, useEffect, useState } from 'react';
// * icon
import { useForm } from '@formspree/react';
import { BsEnvelopeCheckFill, BsMailbox2 } from 'react-icons/bs';
// * components
import {
  Input, InputErrorMessage, Label, TextArea,
} from '../../common/Input';
import TitleContent from '../../common/TitleContent';
import LineDecoration from '../../common/Decoration';
import { ButtonPrimary } from '../../common/Button';
import Toast from '../../common/Toast';
// * helper
import {
  validationEmail,
  validationName,
  validationInstance,
  validationMessage,
  isValidSubmit,
} from '../../../../helper/validation-contact-form';
import triggerToast from '../../../../helper/trigger-toast';

const initialValueFormState = {
  name: '',
  email: '',
  instance: '',
  message: '',
};

export default function ContactSection() {
  const [messageError, setMessageError] = useState(initialValueFormState);
  const [state, handleSubmit] = useForm('xvojrvbw');
  const formRef = useRef(null);
  const toastRef = useRef(null);
  const buttonSubmitRef = useRef(null);
  const errorNameRef = useRef(null);
  const errorEmailRef = useRef(null);
  const errorInstanceRef = useRef(null);
  const errorMessageRef = useRef(null);

  useEffect(() => {
    // * styling with class utility Tailwind css
    if (isValidSubmit(messageError)) {
      buttonSubmitRef.current.disabled = false;
      buttonSubmitRef.current.classList.remove(
        'cursor-not-allowed',
        'opacity-40',
      );
      buttonSubmitRef.current.classList.add(
        'cursor-pointer',
        'opacity-100',
        'group',
      );
    } else {
      buttonSubmitRef.current.disabled = true;
      buttonSubmitRef.current.classList.add('cursor-not-allowed', 'opacity-40');
      buttonSubmitRef.current.classList.remove('group');
    }
  }, [messageError]);

  const handleInput = (type, e) => {
    if (type === 'name') {
      validationName({
        e,
        setMessageError,
        messageError,
        errorNameRef,
      });
    }

    if (type === 'email') {
      validationEmail({
        e,
        setMessageError,
        messageError,
        errorEmailRef,
      });
    }

    if (type === 'instance') {
      validationInstance({
        e,
        setMessageError,
        messageError,
        errorInstanceRef,
      });
    }

    if (type === 'message') {
      validationMessage({
        e,
        setMessageError,
        messageError,
        errorMessageRef,
      });
    }
  };

  if (state.submitting) {
    triggerToast(toastRef);
    formRef.current.reset();

    buttonSubmitRef.current.disabled = true;
    buttonSubmitRef.current.classList.add('cursor-not-allowed', 'opacity-40');
    buttonSubmitRef.current.classList.remove('group');
  }

  return (
    <section className="flex flex-col gap-6 container p-8">
      <div className="flex justify-center items-center gap-3 md:gap-4">
        <TitleContent text="Hubungi Kami" />
        <span className="text-[1.75rem] lg:text-3xl text-primary dark:text-dark-primary">
          <BsMailbox2 />
        </span>
      </div>
      <Toast
        ref={toastRef}
        icon={<BsEnvelopeCheckFill />}
        classNameIcon="text-success"
        text="Pesan anda terkirim"
      />
      <form
        ref={formRef}
        action="POST"
        onSubmit={handleSubmit}
        autoComplete="off"
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6"
      >
        <div className="flex flex-col gap-3">
          <Label htmlFor="name" text="Name">
            <Input
              type="text"
              onInput={(e) => handleInput('name', e)}
              placeholder="Masukkan nama anda"
              id="name"
            />
          </Label>
          <InputErrorMessage ref={errorNameRef} message={messageError.name} />
        </div>

        <div className="flex flex-col gap-3">
          <Label htmlFor="email" text="Email">
            <Input
              type="email"
              onInput={(e) => handleInput('email', e)}
              placeholder="Masukkan email anda"
              id="email"
            />
          </Label>
          <InputErrorMessage ref={errorEmailRef} message={messageError.email} />
        </div>

        <div className="flex flex-col gap-3">
          <Label htmlFor="instance" text="Instansi">
            <Input
              type="text"
              onInput={(e) => handleInput('instance', e)}
              placeholder="Masukkan nama instansi anda"
              id="instance"
            />
          </Label>
          <InputErrorMessage
            ref={errorInstanceRef}
            message={messageError.instance}
          />
        </div>

        <LineDecoration className="sm:col-span-2" />

        <div className="flex flex-col gap-3 sm:col-span-2">
          <Label htmlFor="message" text="Pesan">
            <TextArea
              onInput={(e) => handleInput('message', e)}
              id="message"
              placeholder="Masukkan pesan anda"
            />
          </Label>
          <InputErrorMessage
            ref={errorMessageRef}
            message={messageError.message}
          />
        </div>

        <div className="flex justify-end sm:w-full sm:col-span-1 sm:col-start-2 sm:col-end-3 mt-3">
          <ButtonPrimary
            type="submit"
            className="w-full sm:w-full md:w-[70%] lg:w-[50%]"
            ref={buttonSubmitRef}
          >
            Kirim Pesan
          </ButtonPrimary>
        </div>
      </form>
    </section>
  );
}
