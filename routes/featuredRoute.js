const {Router} = require('express');
const { getFeatured, getFeaturedById, createFeatured, updateFeatured, deleteFeatured } = require('../controllers/featuredController');

const router = Router();

router.get('/', getFeatured);
router.get('/:id', getFeaturedById);
router.post('/', createFeatured);
router.patch('/:id', updateFeatured);
router.delete('/:id', deleteFeatured);

module.exports = router;
