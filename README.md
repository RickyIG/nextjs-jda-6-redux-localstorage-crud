<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
<h3 align="center">Todo List App using Redux (+ LocalStorage & operasi CRUD) -  RickyIG - Tugas Pertemuan Keenam</h3>

  <p align="center">
    Tugas Pertemuan Keenam mengenai studi kasus Todo App versi lengkap dengan Redux dengan tambahan localstorage + CRUD (update dan delete lengkap)
    <br />
    - Todo List App Versi Sederhana: https://github.com/RickyIG/nextjs-jda-6-redux-todo-app
    <br />
    - FormatInput & DisplayName App: https://github.com/RickyIG/nextjs-jda-6-redux-forminput-displaynama 
    <br />
    <br />
    <a href="https://github.com/RickyIG/Vehicle-counter-rickyig"><strong>Explore the docs »</strong></a>
    <br />
    <br />
<!--     <a href="https://github.com/RickyIG/Vehicle-counter-rickyig">View Demo</a>
    ·
    <a href="https://github.com/RickyIG/Vehicle-counter-rickyig/issues">Report Bug</a>
    ·
    <a href="https://github.com/RickyIG/Vehicle-counter-rickyig/issues">Request Feature</a> -->
  </p>
</div>

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

<!-- ABOUT THE PROJECT -->
## About The Project

Tugas Pertemuan Keenam

Tujuan Tugas:

- Memahami konsep state management global dengan Redux
- Melatih kemampuan mengakses dan memodifikasi state di berbagai komponen
- Mengasah pemahaman komunikasi data antar komponen melalui store


Deskripsi Tugas

- Buatlah aplikasi sederhana dengan bebas tema yang memiliki ketentuan berikut:

Ketentuan Utama:

- [x] Gunakan Redux sebagai state management global.
- [x] Memiliki minimal 2 komponen berbeda yang:
- [x] Mengakses state global menggunakan useSelector
- [x] Mengubah state global menggunakan useDispatch
- [x] Komponen A melakukan update atau menambahkan data ke store.
- [x] Komponen B membaca data tersebut dan menampilkannya di UI.


Contoh Studi Kasus (Opsional)

Jika bingung memilih tema, berikut beberapa contoh kasus sederhana yang bisa digunakan:

- Todo List
  - - Link GitHub versi Sederhana: https://github.com/RickyIG/nextjs-jda-6-redux-todo-app
  - Komponen A: Form input untuk menambahkan todo (dispatch action addTodo)
  - Komponen B: Menampilkan daftar todo (menggunakan useSelector)
- Form Input & Display
  - Link GitHub: https://github.com/RickyIG/nextjs-jda-6-redux-forminput-displaynama 
  - Komponen A: Form input untuk memasukkan nama (dispatch action untuk setName)
  - Komponen B: Menampilkan nama yang diinput di komponen A (menggunakan useSelector)



<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


[contributors-shield]: https://img.shields.io/github/contributors/RickyIG/nextjs-jda-6-redux-localstorage-crud.svg?style=for-the-badge
[contributors-url]: https://github.com/RickyIG/nextjs-jda-6-redux-localstorage-crud/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/RickyIG/nextjs-jda-6-redux-localstorage-crud.svg?style=for-the-badge
[forks-url]: https://github.com/RickyIG/nextjs-jda-6-redux-localstorage-crud/network/members
[stars-shield]: https://img.shields.io/github/stars/RickyIG/nextjs-jda-6-redux-localstorage-crud.svg?style=for-the-badge
[stars-url]: https://github.com/RickyIG/nextjs-jda-6-redux-localstorage-crud/stargazers
[issues-shield]: https://img.shields.io/github/issues/RickyIG/nextjs-jda-6-redux-localstorage-crud.svg?style=for-the-badge
[issues-url]: https://github.com/RickyIG/nextjs-jda-6-redux-localstorage-crud/issues
[license-shield]: https://img.shields.io/github/license/RickyIG/nextjs-jda-6-redux-localstorage-crud.svg?style=for-the-badge
[license-url]: https://github.com/RickyIG/nextjs-jda-6-redux-localstorage-crud/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/rickyindrag
