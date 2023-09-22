import { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useSetTitle = (book) => {
  const title = useRef(document.title);
  const { pathname } = useLocation();

  useEffect(() => {
    switch (pathname) {
      case '/':
        title.current = 'RakBukuKu | Beranda';
        break;
      case '/beranda':
        title.current = 'RakBukuKu | Beranda';
        break;
      case '/rakbuku':
        title.current = 'Semua Buku | RakBukuKu';
        break;
      case '/rakbuku/selesaidibaca':
        title.current = 'Selesai Dibaca | RakBukuKu';
        break;
      case '/rakbuku/ongoing':
        title.current = 'Ongoing | RakBukuKu';
        break;
      case '/rakbuku/bukufavorit':
        title.current = 'Buku Favorite | RakBukuKu';
        break;
      case `/detailbuku/${book?.title.split(' ').join('')}/${book?.id}`:
        title.current = `Detail Buku ${book?.title} | RakBukuKu`;
        break;
      default:
        title.current = '404 Not Found | RakBukuKu';
        break;
    }

    document.title = title.current;
  }, [pathname]);
};
export default useSetTitle;
