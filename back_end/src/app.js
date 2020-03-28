import express from 'express';
import routes from './routes';

class App {
  constructor() {
    this.server = express();

    this.config();
    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  config() {
    this.server.use(express.json());

    this.server.use(express.static('public'));
  }

  middlewares() {}

  routes() {
    this.server.use(routes);
  }

  exceptionHandler() {}
}

export default new App().server;
