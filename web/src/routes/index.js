import userRoutes from './users.js';

export const initializeAppRoutes = (app) => {
  app.get('/', (_req, res) => {
    res.render('index', { title: 'Github Worflow Demo' });
  });

  app.use('/user', userRoutes);

  // Catch-all route for handling 404 errors
  app.use('*', (_req, res) => {
    res.render('error', {
      message: 'Seems you have lost your way',
      error: { status: 404 }
    });
  });
};
