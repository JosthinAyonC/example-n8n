import dotenv from 'dotenv';
import express from 'express';
import fs from 'fs';
import path from 'path';

import routes from './routes';
import './utils/logger.utils';

const env = process.env.NODE_ENV || 'development';
const envFile = path.resolve(process.cwd(), `.env.${env}`);

if (fs.existsSync(envFile)) {
  dotenv.config({ path: envFile });
  console.log(`Variables cargadas desde ${envFile}`);
} else {
  console.warn(`Archivo ${envFile} no encontrado, se usan valores por defecto.`);
}

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Routes
app.use('/api', routes);

app.get('/', (_req, res) => {
  res.send(`Ambiente actual: ${env}`);
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
