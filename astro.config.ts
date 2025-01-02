import { defineConfig } from 'astro/config';

import expressiveCode from 'astro-expressive-code';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import spectre from './package/src';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://guides.chrsnv.ru',
  output: 'static',
  integrations: [
    expressiveCode(),
    mdx(),
    sitemap(),
    spectre({
      name: 'Гайдмастер',
      openGraph: {
        home: {
          title: 'Гайдмастер',
          description: 'Инструмент повышения квалификации.'
        },
        blog: {
          title: 'Блог',
          description: 'Инструкции и гайды к работе.'
        }
      }
    })
  ],
  adapter: node({
    mode: 'standalone'
  })
});