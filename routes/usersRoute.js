const {Router} = require('express');
const {signinUser, createUser, getUsers, getUserById, updateUser, deleteUser} = require('../controllers/userController');

const router = Router();

router.get('/', getUsers);
router.get('/:id', getUserById);
router.post('/signin', signinUser);
router.post('/signup', createUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
