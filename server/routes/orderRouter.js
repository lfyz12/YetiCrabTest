const Router = require('express')
const router = new Router()
const orderController = require('../controller/OrderController')


router.post('/createOrder', orderController.createOrder)
router.post('/deleteOrder', orderController.deleteOrderById)

router.put('/updateClientCompanyName', orderController.updateClientCompanyNameByIdOrder)
router.put('/updateCarrierFullName', orderController.updateCarrierFullNameByIdOrder)
router.put('/updateCarrierPhone', orderController.updateCarrierPhoneByIdOrder)
router.put('/updateComments', orderController.updateCommentsByIdOrder)
router.put('/updateStatus', orderController.updateStatusByIdOrder)
router.put('/updateAtiCode', orderController.updateAtiCodeByIdOrder)

router.get('/getAllOrders', orderController.getAllOrders)

module.exports = router