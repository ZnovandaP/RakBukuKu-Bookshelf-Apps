const triggerToast = ({ current }) => {
  // * appear Toast
  current.classList.replace('hidden', 'flex');
  setTimeout(() => {
    current.classList.replace('scale-0', 'scale-100');
  }, 200);

  // * disappear Toast
  setTimeout(() => {
    current.classList.replace('scale-100', 'scale-0');
    setTimeout(() => {
      current.classList.replace('flex', 'hidden');
    }, 200);
  }, 2500);
};

export default triggerToast;
