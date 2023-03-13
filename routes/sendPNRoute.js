const {Router} = require('express');
const {sendPN} = require('../controllers/sendPNController');

const router = Router();

router.post('/pushnotification', sendPN);

module.exports = router;
