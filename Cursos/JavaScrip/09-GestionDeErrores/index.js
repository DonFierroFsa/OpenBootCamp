const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});


//console.log("Hola, estoy saliendo por pantalla")
console.info("Esto es un mensjae informativo")
console.warn("Esto es un mensaje de advertencia")
console.error("ESTO ES UN ERROR!!!")
console.debug("Este es un debug")