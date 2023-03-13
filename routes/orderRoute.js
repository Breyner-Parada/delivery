const {Router} = require('express');
const {getOrders, getOrdersByUser, getOrdersById, createOrder, updateOrder, deleteOrder, getOrdersByRestaurant, getOrdersByRestaurantId} = require('../controllers/ordersController');

const router = Router();

router.get('/', getOrders);
router.get('/user', getOrdersByUser);
router.get('/restaurant', getOrdersByRestaurant);
router.get('/restaurantid', getOrdersByRestaurantId);
router.get('/:id', getOrdersById);
router.post('/', createOrder);
router.patch('/:id', updateOrder);
router.delete('/:id', deleteOrder);

module.exports = router;
