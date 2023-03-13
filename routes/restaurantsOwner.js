const {Router} = require('express');

const { getAllRestaurantsOwner, getRestaurantsOwnerById, createRestaurantsOwner, updateRestaurantsOwner, deleteRestaurantsOwner, signInRestaurantsOwner } = require('../controllers/restaurantsOwnerController');

const router = Router();

router.get('/', getAllRestaurantsOwner);
router.get('/:id', getRestaurantsOwnerById);
router.post('/signin', signInRestaurantsOwner);
router.post('/signup', createRestaurantsOwner);
router.patch('/:id', updateRestaurantsOwner);
router.delete('/:id', deleteRestaurantsOwner);

module.exports = router;