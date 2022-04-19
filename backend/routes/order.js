const express = require('express');

const router = express.Router();

const{ newOrder,
    getSingleOrder,
    myOrders,
    allOrders,
    updateOrder,
    deleteOrder 
} = require('../controllers/orderController')

const {isAuthenticatedUser,authorizedRoles} = require('../middlewares/user');

router.route('/order/new').post(isAuthenticatedUser, newOrder);
router.route('/order/:id').get(isAuthenticatedUser, getSingleOrder);

router.route('/orders/me').get(isAuthenticatedUser, myOrders);
router.route('/tourAgent/orders').get(isAuthenticatedUser,authorizedRoles('tourAgent'), allOrders); 
router.route('/tourAgent/order/:id').put(isAuthenticatedUser,authorizedRoles('tourAgent'), updateOrder); 
router.route('/tourAgent/order/:id').delete(isAuthenticatedUser,authorizedRoles('tourAgent'), deleteOrder);
module.exports = router;