import React from 'react';
import { BsCheckCircleFill, BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs';
import { BiTimeFive } from 'react-icons/bi';
import { ColBody, ColHead, Table } from '../../common/Table';

export default function TableDetailBookSection({ book }) {
  return (
    <Table>
      <thead>
        <tr>
          <ColHead
            className="font-bold text-neutral-700 dark:text-neutral-300"
          >
            Judul
          </ColHead>

          <ColHead
            className="font-medium text-neutral-600 dark:text-neutral-400"
          >
            {book?.title}
          </ColHead>
        </tr>
      </thead>
      <tbody>
        <tr>
          <ColBody
            className="font-bold text-neutral-700 dark:text-neutral-300"
          >
            Author
          </ColBody>

          <ColBody
            className="font-medium text-neutral-600 dark:text-neutral-400"
          >
            {book?.author}

          </ColBody>
        </tr>

        <tr>
          <ColBody
            className="font-bold text-neutral-700 dark:text-neutral-300"
          >
            ID Buku
          </ColBody>

          <ColBody
            className="font-medium text-neutral-600 dark:text-neutral-400"
          >
            {book?.id}
          </ColBody>
        </tr>

        <tr>
          <ColBody
            className="font-bold text-neutral-700 dark:text-neutral-300"
          >
            Tahun Rilis
          </ColBody>

          <ColBody
            className="font-medium text-neutral-600 dark:text-neutral-400"
          >
            {book?.yearRelease}
          </ColBody>
        </tr>

        <tr>
          <ColBody
            className="font-bold text-neutral-700 dark:text-neutral-300"
          >
            Penerbit
          </ColBody>

          <ColBody
            className="font-medium text-neutral-600 dark:text-neutral-400"
          >
            {book?.publisher}

          </ColBody>
        </tr>

        <tr>
          <ColBody
            className="font-bold text-neutral-700 dark:text-neutral-300"
          >
            Genre
          </ColBody>

          <ColBody
            className="font-medium text-neutral-600 dark:text-neutral-400"
          >
            {book?.genre}
          </ColBody>
        </tr>

        <tr>
          <ColBody
            className="font-bold text-neutral-700 dark:text-neutral-300"
          >
            Status Buku
          </ColBody>

          <ColBody
            className="font-medium text-neutral-600 dark:text-neutral-400"
          >
            <p className="flex items-center gap-2">
              <span className={`text-2xl ${book?.isCompleted ? 'text-success' : 'text-warning'}`}>
                {book?.isCompleted ? (<BsCheckCircleFill />) : (<BiTimeFive />)}
              </span>
              {book?.isCompleted ? 'Selesai dibaca' : 'Ongoing'}
            </p>
          </ColBody>
        </tr>

        <tr>
          <ColBody
            className="font-bold text-neutral-700 dark:text-neutral-300"
          >
            Buku Favorit
          </ColBody>

          <ColBody
            className="font-medium text-neutral-600 dark:text-neutral-400"
          >
            <p className="flex items-center gap-3">
              <span className="text-2xl text-danger">
                {book?.isFavorited ? (<BsSuitHeartFill />) : (<BsSuitHeart />) }
              </span>
              {book?.isFavorited ? `Buku ${book?.title} favorit` : `Buku ${book?.title} tidak favorit` }
            </p>
          </ColBody>
        </tr>
      </tbody>
    </Table>
  );
}
