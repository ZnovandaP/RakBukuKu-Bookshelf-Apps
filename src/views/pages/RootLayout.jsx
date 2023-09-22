import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import FooterSection from '../components/footer/FooterSection';
import ScrollToTop from '../components/common/ScrollToTop';

export default function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <footer>
        <FooterSection />
      </footer>
    </>
  );
}
