const Router = require('express');
const router = new Router();
const getServicesById = require('../controllers/serviceController')


//router.route('/servicedetail').get(getServices);
router.route('/service/:id').get(getServicesById);



module.exports = router;