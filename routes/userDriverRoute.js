const {Router} = require('express');
const {getUserDrivers, getUserDriverById, signinUserDriver, createUserDriver, updateUserDriver, deleteUserDriver} = require('../controllers/userDriverController');

const router = Router();

router.get('/', getUserDrivers);
router.get('/:id', getUserDriverById);
router.post('/signin', signinUserDriver);
router.post('/signup', createUserDriver);
router.patch('/:id', updateUserDriver);
router.delete('/:id', deleteUserDriver);

module.exports = router;
