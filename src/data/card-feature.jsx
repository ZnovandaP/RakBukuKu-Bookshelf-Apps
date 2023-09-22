import React from 'react';
import uniqid from 'uniqid';
import { CiMobile3 } from 'react-icons/ci';
import { MdFamilyRestroom } from 'react-icons/md';
import { FaHeart } from 'react-icons/fa';
import { IoMdBook } from 'react-icons/io';

const cardFeatureData = [

  {
    id: uniqid('CF-'),
    icon: (<IoMdBook />),
    title: 'Rak Buku Digital',
    description: 'Fitur utama dari RakBukuKu adalah menambahkan, menghapus, dan mengubah daftar buku yang diinputkan oleh pengguna',
  },
  {
    id: uniqid('CF-'),
    icon: (<FaHeart />),
    title: 'Buku Favorite',
    description: 'RakBukuKu memiliki fitur menambahkan buku kedalam daftar favorit, setelah buku daftar buku tersebut ditambahkan',
  },
  {
    id: uniqid('CF-'),
    icon: (<MdFamilyRestroom />),
    title: 'Ramah Pengguna',
    description: 'RakBukuKu memiliki desain yang cenderung mudah dan sederhana untuk digunakan bagi semua kalangan',
  },
  {
    id: uniqid('CF-'),
    icon: (<CiMobile3 />),
    title: 'Akses Mobile',
    description: 'RakBukuKu dapat digunakan secara mobile, yang membuat aplikasi ini dapat digunakan dimanapun dan kapanpun',
  },
];
export default cardFeatureData;
