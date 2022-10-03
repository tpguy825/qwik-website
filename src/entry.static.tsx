import { qwikCityGenerate } from '@builder.io/qwik-city/static/node';
import render from './entry.ssr';

// Execute Qwik City Static Site Generator
qwikCityGenerate(render, {
  origin: 'https://qwik.builder.io',
  outDir: __dirname+"/dist",
  
});
