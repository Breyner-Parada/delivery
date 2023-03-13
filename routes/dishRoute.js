const {Router} = require('express');
const {getDishes, getDishById, createDish, updateDish, deleteDish, getDishesByUser} = require('../controllers/dishController');

const router = Router();

router.get('/', getDishes);
router.get('/userdishes', getDishesByUser);
router.get('/:id', getDishById);
router.post('/', createDish);
router.patch('/:id', updateDish);
router.delete('/:id', deleteDish);

module.exports = router;