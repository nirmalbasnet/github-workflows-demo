import express from 'express';

import path from 'path';

// import routes from "@src/routes";
import { initializeAppRoutes } from '#routes';

const app = express();

app.use(express.static(path.join('./', 'public')));

// view engine setup
app.set('views', path.join('./src', 'views'));
app.set('view engine', 'jade');

initializeAppRoutes(app);

export const startServer = (port = 3000) => {
  return new Promise((resolve) => {
    const server = app.listen(port, () => {
      // eslint-disable-next-line no-console
      console.log(`App listening on port ${port}`);
      resolve(server);
    });
  });
};
