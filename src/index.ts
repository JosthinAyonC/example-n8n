import ngrok from '@ngrok/ngrok';
import dotenv from 'dotenv';
import express from 'express';
import fs from 'fs';
import http from 'http';
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
const port = parseInt(process.env.PORT || '3000', 10);

app.use(express.json());

// Routes
app.use('/api', routes);

app.get('/', (_req, res) => {
  res.send(`Ambiente actual: ${env}`);
});

const server = http.createServer(app);
server.listen(port, async () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);

  try {
    // Conectar Ngrok
    const listener = await ngrok.connect({
      addr: port,
      authtoken: process.env.NGROK_AUTHTOKEN,
    });
    console.log(`🌍 Tu servidor está disponible públicamente en: ${listener.url()}`);
  } catch (err) {
    console.error('❌ Error al iniciar Ngrok:', err);
  }
});
