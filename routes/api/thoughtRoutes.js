const router = require('express').Router();

const {
    getThought,
    getSingleThought,
    deleteThought
} = require('../../controllers/thoughtController');

router.route('/').get(getThought);
router.route('/:thoughtId').get(getSingleThought).delete(deleteThought);

module.exports = router;