export const validationEmail = ({
  e, setMessageError, errorEmailRef, messageError,
}) => {
  if (!e.target.value) {
    setMessageError({ ...messageError, email: 'Email harus diisi' });
    errorEmailRef.current.classList.remove('hidden');
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.target.value)) {
    setMessageError({ ...messageError, email: 'Format email anda tidak tepat' });
    errorEmailRef.current.classList.remove('hidden');
  } else {
    errorEmailRef.current.classList.add('hidden');
    setMessageError({ ...messageError, email: 'submit' });
  }
};

export const validationName = ({
  e, setMessageError, errorNameRef, messageError,
}) => {
  if (!e.target.value) {
    setMessageError({ ...messageError, name: 'Nama harus diisi' });
    errorNameRef.current.classList.remove('hidden');
  } else if (e.target.value.length < 3) {
    setMessageError({ ...messageError, name: 'Masukkan nama minimal 3 karakter' });
    errorNameRef.current.classList.remove('hidden');
  } else {
    errorNameRef.current.classList.add('hidden');
    setMessageError({ ...messageError, name: 'submit' });
  }
};

export const validationMessage = ({
  e, setMessageError, errorMessageRef, messageError,
}) => {
  if (!e.target.value) {
    setMessageError({ ...messageError, message: 'Pesan harus diisi' });
    errorMessageRef.current.classList.remove('hidden');
  } else if (e.target.value.length < 3) {
    setMessageError({ ...messageError, message: 'Masukkan pesan minimal 3 karakter' });
    errorMessageRef.current.classList.remove('hidden');
  } else {
    errorMessageRef.current.classList.add('hidden');
    setMessageError({ ...messageError, message: 'submit' });
  }
};

export const validationInstance = ({
  e, setMessageError, errorInstanceRef, messageError,
}) => {
  if (!e.target.value) {
    setMessageError({ ...messageError, instance: 'Instansi harus diisi' });
    errorInstanceRef.current.classList.remove('hidden');
  } else if (e.target.value.length < 3) {
    setMessageError({ ...messageError, instance: 'Masukkan data instansi minimal 3 karakter' });
    errorInstanceRef.current.classList.remove('hidden');
  } else {
    errorInstanceRef.current.classList.add('hidden');
    setMessageError({ ...messageError, instance: 'submit' });
  }
};

export const isValidSubmit = ({
  email, name, instance, message,
}) => email === 'submit' && name === 'submit' && instance === 'submit' && message === 'submit';
