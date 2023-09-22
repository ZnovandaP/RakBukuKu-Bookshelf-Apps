import React, { useState, useRef } from 'react';
// * redux
import { useDispatch, useSelector } from 'react-redux';
// * icons
import {
  BsSuitHeartFill, BsSuitHeart, BsCheckCircle, BsCheckCircleFill,
} from 'react-icons/bs';
// * reducers
import { editBook } from '../../../redux/slices/bookshelf-slices';
import { closeModal } from '../../../redux/slices/modal-open-slices';
// *components
import {
  Checkbox, Input, Label, TextArea, FileInput,
} from './Input';
import { ButtonPrimary } from './Button';
import triggerToast from '../../../helper/trigger-toast';

let initialValueFormEditBook;

export default function BodyFormEditBook({ toastRef, id }) {
  const books = useSelector((state) => state.bookshelf.shelf);
  books.forEach((book) => {
    if (book.id === id) initialValueFormEditBook = book;
  });

  const [formAddBook, setFormAddBook] = useState(initialValueFormEditBook);
  const formRef = useRef(null);
  const dispatch = useDispatch();
  const {
    title, author, publisher, yearRelease, genre, synopsis, isFavorited, isCompleted,
  } = formAddBook;

  const HandlerSubmit = (e) => {
    e.preventDefault();
    dispatch(editBook({ id, ...formAddBook }));
    formRef.current.reset();
    dispatch(closeModal({ isOpen: false, typeOpen: '', id: '' }));
    triggerToast(toastRef);
  };

  function printFile(e) {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setFormAddBook({ ...formAddBook, imageCover: reader.result });
    };
  }

  return (
    <form
      ref={formRef}
      onSubmit={(e) => HandlerSubmit(e)}
      autoComplete="off"
      className="grid grid-cols-1 gap-4 md:grid-cols-2 md:py-2 md:px-3 md:gap-6"
    >
      <Label
        htmlFor="title"
        text="Judul Buku"
      >
        <Input
          id="title"
          type="text"
          required
          placeholder="Masukkan judul Buku"
          value={title}
          onInput={(e) => setFormAddBook({ ...formAddBook, title: e.target.value })}
        />
      </Label>

      <Label
        htmlFor="author"
        text="Penulis"
      >
        <Input
          id="author"
          type="text"
          required
          placeholder="Masukkan Nama Penulis"
          value={author}
          onInput={(e) => setFormAddBook({ ...formAddBook, author: e.target.value })}
        />
      </Label>

      <Label
        htmlFor="publisher"
        text="Penerbit"
      >
        <Input
          id="publisher"
          type="text"
          required
          placeholder="Masukkan Nama Penerbit"
          value={publisher}
          onInput={(e) => setFormAddBook({ ...formAddBook, publisher: e.target.value })}
        />
      </Label>

      <Label
        htmlFor="year-release"
        text="Tahun Terbit Buku"
      >
        <Input
          id="year-release"
          type="number"
          required
          placeholder="Masukkan Tahun Terbit Buku"
          value={yearRelease}
          onInput={(e) => setFormAddBook({ ...formAddBook, yearRelease: e.target.value })}
        />
      </Label>

      <Label
        htmlFor="genre"
        text="Genre Buku"
      >
        <Input
          id="genre"
          type="text"
          required
          placeholder="Masukkan genre Buku"
          value={genre}
          onInput={(e) => setFormAddBook({ ...formAddBook, genre: e.target.value })}
        />
      </Label>

      <Label
        htmlFor="cover"
        text="Berkas Gambar Cover Buku"
      >
        <FileInput
          id="cover"
          accept="image/*"
          onChange={(e) => printFile(e)}
        />
      </Label>

      <Label
        htmlFor="synopsis"
        text="Sinopsis Buku"
        className="md:col-span-2"
      >
        <TextArea
          id="synopsis"
          placeholder="Masukkan Sinopsis buku"
          required
          value={synopsis}
          onInput={(e) => setFormAddBook({ ...formAddBook, synopsis: e.target.value })}
        />
      </Label>

      <Checkbox
        htmlFor="favorite"
        text="Tambahkan ke Favorit"
        isChecked={isFavorited}
        onChecked={() => setFormAddBook({ ...formAddBook, isFavorited: !formAddBook.isFavorited })}

      >
        <span className="text-danger">
          {!isFavorited ? (<BsSuitHeart />) : (<BsSuitHeartFill />)}
        </span>
      </Checkbox>

      <Checkbox
        htmlFor="completed"
        text="Tandai Buku Selesai Dibaca"
        isChecked={isCompleted}
        onChecked={() => setFormAddBook({ ...formAddBook, isCompleted: !formAddBook.isCompleted })}
      >
        <span className="text-success">
          {!isCompleted ? (<BsCheckCircle />) : (<BsCheckCircleFill />)}
        </span>
      </Checkbox>

      <div className="flex justify-center md:col-start-2">
        <ButtonPrimary
          className="w-full"
          type="submit"
        >
          Perbarui Data Buku
        </ButtonPrimary>
      </div>
    </form>
  );
}
