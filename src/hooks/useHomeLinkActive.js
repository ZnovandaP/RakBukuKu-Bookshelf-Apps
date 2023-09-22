import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useHomeLinkActive = (ref) => {
  const currentLink = useLocation();
  useEffect(() => {
    if (currentLink.pathname === '/beranda') {
      ref.current.classList.replace('nav-hover', 'active');
    }
  }, []);
};

export default useHomeLinkActive;
