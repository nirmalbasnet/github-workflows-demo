import express from 'express';

const router = express.Router();

/* GET users listing. */
router.get('/', function (_req, res) {
  res.render('index', { title: 'Github Worflow Demo Users Page' });
});

router.get('/:id', function (_req, res) {
  res.render('index', { title: 'Github Worflow Demo Users By ID Page' });
});

export default router;
