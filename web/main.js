import express from 'express';

import path from 'path';

// import routes from "@src/routes";
import { initializeAppRoutes } from '#routes';

const app = express();

// view engine setup
app.set('views', path.join('./src', 'views'));
app.set('view engine', 'jade');

initializeAppRoutes(app);

const PORT = 3000;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${PORT}`);
});
