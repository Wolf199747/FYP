
const express= require('express');
const { route } = require('express/lib/application');

const router = express.Router();

const {getProducts, 
    newProduct, 
    getSingleProduct,
    updateProduct,
    deleteProduct,
    getProductReviews,
    deleteReview,
    createProdcutReview,
    getTourAgentProducts
}= require('../controllers/productControllers')

const{isAuthenticatedUser,authorizedRoles} = require('../middlewares/user')

router.route('/products').get(getProducts);
router.route('/tourAgent/products/').get(isAuthenticatedUser,getTourAgentProducts);
router.route('/product/:id').get(getSingleProduct);


router.route('/tourAgent/product/new').post(isAuthenticatedUser,authorizedRoles('tourAgent'),newProduct);

router.route('/tourAgent/products/:id').put(isAuthenticatedUser,authorizedRoles('tourAgent'),updateProduct);
router.route('/tourAgent/products/:id').delete(isAuthenticatedUser,authorizedRoles('tourAgent'),deleteProduct);

router.route('/review').put(isAuthenticatedUser,createProdcutReview);
router.route('/reviews').get(isAuthenticatedUser,getProductReviews);
router.route('/reviews').delete(isAuthenticatedUser,deleteReview)


module.exports = router;
