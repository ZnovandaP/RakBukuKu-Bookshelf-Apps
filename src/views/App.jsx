import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
// * Page
import RootLayout from './pages/RootLayout';
import Home from './pages/Home';
import Bookshelf from './pages/Bookshelf';
import PageNotFound from './pages/404';

// * section for bookshelf page
import AllBooks from './components/body/bookshelf/AllBooks';
import CompletedBooks from './components/body/bookshelf/CompletedBooks';
import OngoingBooks from './components/body/bookshelf/OngoingBooks';
import FavoriteBooks from './components/body/bookshelf/FavoriteBooks';
import BookDetail from './pages/BookDetail';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={(<RootLayout />)}
      errorElement={(<PageNotFound />)}
    >
      <Route index element={(<Home />)} />
      <Route path="beranda" element={(<Home />)} />
      <Route path="rakbuku" element={(<Bookshelf />)}>
        <Route index element={(<AllBooks />)} />
        <Route path="semuabuku" element={(<AllBooks />)} />
        <Route path="selesaidibaca" element={(<CompletedBooks />)} />
        <Route path="ongoing" element={(<OngoingBooks />)} />
        <Route path="bukufavorit" element={(<FavoriteBooks />)} />
      </Route>
      <Route path="detailbuku/:title/:idBook" element={(<BookDetail />)} />
    </Route>
    ,
  ),
);

export default function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}
