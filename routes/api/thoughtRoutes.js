const router = require('express').Router();
const {
  getThoughts,
  createThought,
  getSingleThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require('../../controllers/thoughtController.js');

// /api/thoughts
router.route('/')
.get(getThoughts)

// /api/thoughts/:userId
router.route('/:userId')
.post(createThought);


// /api/thoughts/:thoughtId
router.route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

  // /api/thoughts/:thoughtId/reactions
  router.route('/:thoughtId/reactions')
  .post(addReaction);

  // /api/thoughts/:thoughtId/reactions/:reactionId
  router.route('/:thoughtId/reactions/:reactionId')
  .delete(deleteReaction);

module.exports = router;
