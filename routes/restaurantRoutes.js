const {Router} = require('express');
const {getRestaurants, getRestaurantById, createRestaurant, updateRestaurant, deleteRestaurant, getRestaurantBySearch, getRestaurantByUserId } = require('../controllers/restaurantController');

const router = Router();

router.get('/', getRestaurants);
router.get('/search', getRestaurantBySearch);
router.get('/user', getRestaurantByUserId);
router.get('/:id', getRestaurantById);
router.post('/', createRestaurant);
router.patch('/:id', updateRestaurant);
router.delete('/:id', deleteRestaurant);

module.exports = router;