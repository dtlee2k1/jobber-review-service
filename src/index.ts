import express from 'express';
import { start } from '@review/server';

function init() {
  const app = express();
  start(app);
}

init();
