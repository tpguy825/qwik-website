import { qwikCity } from '@builder.io/qwik-city/middleware/node';
import express from 'express';
import { join } from 'path';
import render from './entry.ssr';

// Directories where the static assets are located
const distDir = join(__dirname, '..', '..', 'dist');
const buildDir = join(distDir, 'build');

// Create the Qwik City express middleware
const { router, notFound } = qwikCity(render);

// Create the express server
// https://expressjs.com/
const app = express();

// Static asset handlers
// https://expressjs.com/en/starter/static-files.html
app.use(`/build`, express.static(buildDir, { immutable: true, maxAge: '1y' }));
app.use(express.static(distDir, { redirect: false }));

// Use Qwik City's page and endpoint request handler
app.use(router);

// Use Qwik City's 404 handler
app.use(notFound);

export default app
