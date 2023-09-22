import { createSlice } from '@reduxjs/toolkit';

const bookshelfSlices = createSlice({
  name: 'bookshelf',
  initialState: {
    shelf: JSON.parse(localStorage.getItem('BOOKSHELF')) ?? [],
  },
  reducers: {
    addBook: ({ shelf }, { payload }) => {
      shelf.push(payload);
    },

    editBook: ({ shelf }, { payload }) => {
      shelf.map((book) => {
        if (book.id === payload.id) {
          book.author = payload.author;
          book.genre = payload.genre;
          book.isCompleted = payload.isCompleted;
          book.isFavorited = payload.isFavorited;
          book.publisher = payload.publisher;
          book.synopsis = payload.synopsis;
          book.title = payload.title;
          book.imageCover = payload.imageCover;
          book.yearRelease = payload.yearRelease;
        }
        return book;
      });
    },

    deleteBook: ({ shelf }, { payload }) => {
      let indexBook;
      shelf.forEach((book, index) => {
        if (book.id === payload.id) indexBook = index;
      });
      shelf.splice(indexBook, 1);
    },

    favoritedBook: ({ shelf }, { payload }) => {
      shelf.map((book) => {
        if (book.id === payload.id) {
          book.isFavorited = payload.bookIsFavorited;
        }
        return book;
      });
    },

    completedBook: ({ shelf }, { payload }) => {
      shelf.map((book) => {
        if (book.id === payload.id) {
          book.isCompleted = payload.bookIsCompleted;
        }
        return book;
      });
    },
  },
});

export const {
  addBook, editBook, deleteBook, completedBook, favoritedBook,
} = bookshelfSlices.actions;
export default bookshelfSlices;

/*
* Interface For Shelf State Redux
{
        id: 'ab32eid-rakbukuku',
        title: 'Harry Potter',
        author: 'J.K. Rowling',
        publisher: 'Unknown',
        yearRelease: '2002',
        genre: 'Fantasy, Advanture, Magic',
        synopsis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quisquam asperiores ducimus quos est saepe consequuntur accusamus ipsam amet nemo,
        quas aliquid nesciunt doloribus similique autem illum vitae assumenda quod velit.',
        imageCover: 'https://restaurant-api.dicoding.dev/images/medium/03',
        isFavorited: true,
        isCompleted: true,
      },
*/
