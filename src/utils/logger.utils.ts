const originalConsole = {
  log: console.log,
  info: console.info,
  warn: console.warn,
  error: console.error,
};

const formatDate = () => {
  return new Date().toISOString();
};

const logWithTimestamp = (type: 'log' | 'info' | 'warn' | 'error') => {
  return (...args: unknown[]) => {
    const timestamp = formatDate();
    originalConsole[type](`[${timestamp}] ${type.toUpperCase()}`, ...args);
  };
};

// Exportar como logger util
export const logger = {
  log: logWithTimestamp('log'),
  info: logWithTimestamp('info'),
  warn: logWithTimestamp('warn'),
  error: logWithTimestamp('error'),
};

// Opcional: sobrescribir los métodos de consola globalmente
console.log = logger.log;
console.info = logger.info;
console.warn = logger.warn;
console.error = logger.error;
