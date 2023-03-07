const router = require('express').Router();

const {
    getThought,
    getSingleThought,
    deleteThought,
    createThought,
    updateThought,
    deleteReaction,
    createReaction
} = require('../../controllers/thoughtController');

// Get all thoughts, create new thought
router.route('/').get(getThought).post(createThought);

// Get thought by ID, update thought by ID, delete thought by ID
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

// Post new reactions
//router.route('/:thoughtId/reactions').post(createReaction);
// Delete reaction by ID
//router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);
module.exports = router;