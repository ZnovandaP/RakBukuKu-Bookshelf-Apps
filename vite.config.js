import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import webfontDownload from 'vite-plugin-webfont-dl';
import { VitePWA } from 'vite-plugin-pwa';
import { chunkSplitPlugin } from 'vite-plugin-chunk-split';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    cssMinify: 'esbuild',
    minify: 'esbuild',
  },

  plugins: [
    react(),

    webfontDownload([
      'https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&display=swap',
      'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap',
    ]),

    chunkSplitPlugin({
      strategy: 'default',
    }),

    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        '**/*',
      ],
      manifest: {
        name: 'RakBukuKu',
        theme_color: '#fd4242',
        background_color: '#FFEADD',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        short_name: 'RakBukuKu',
        orientation: 'portrait-primary',
        description: 'RakBukuKu merupakan web aplikasi yang bertujuan untuk menyimpan data buku-buku yang pernah user baca, disini kita dapat menambahkan, mengubah, menghapus data buku serta dapat memberikan tanda buku sudah selesai atau belum, dan memerikan like pada buku',
        icons: [
          {
            src: 'android/android-launchericon-48-48.png',
            sizes: '48x48',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'android/android-launchericon-72-72.png',
            sizes: '72x72',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'android/android-launchericon-96-96.png',
            sizes: '96x96',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'android/android-launchericon-144-144.png',
            sizes: '144x144',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'android/android-launchericon-192-192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'android/android-launchericon-512-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'ios/50.png',
            sizes: '50x50',
            type: 'image/png',
            purpose: 'apple touch icon',
          },
          {
            src: 'ios/72.png',
            sizes: '72x72',
            type: 'image/png',
            purpose: 'apple touch icon',
          },
          {
            src: 'ios/100.png',
            sizes: '100x100',
            type: 'image/png',
            purpose: 'apple touch icon',
          },
          {
            src: 'ios/144.png',
            sizes: '144x144',
            type: 'image/png',
            purpose: 'apple touch icon',
          },
          {
            src: 'ios/192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'apple touch icon',
          },
          {
            src: 'ios/256.png',
            sizes: '256x256',
            type: 'image/png',
            purpose: 'apple touch icon',
          },
          {
            src: 'ios/512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'apple touch icon',
          },
          {
            src: 'maskable/maskable_icon_x48.png',
            sizes: '48x48',
            type: 'image/png',
            purpose: 'maskable',
          },
          {
            src: 'maskable/maskable_icon_x72.png',
            sizes: '72x72',
            type: 'image/png',
            purpose: 'maskable',
          },
          {
            src: 'maskable/maskable_icon_x96.png',
            sizes: '96x96',
            type: 'image/png',
            purpose: 'maskable',
          },
          {
            src: 'maskable/maskable_icon_x128.png',
            sizes: '128x128',
            type: 'image/png',
            purpose: 'maskable',
          },
          {
            src: 'maskable/maskable_icon_x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,jsx,ts,tsx,html,css,jpg,webp,png,ico,svg,json,woff,woff2,ttf}'],
      },
    }),
  ],
});
