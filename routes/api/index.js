const router = require('express').Router();
const thoughtsRoutes = require('./thoughtsRoutes');
const commentRoutes = require('./commentsRoutes');
// const userRoutes = require('./userRoutes');

router.use('/thoughts', thoughtsRoutes);
router.use('/comments', commentRoutes);
// router.use('/users', userRoutes);


module.exports = router;
