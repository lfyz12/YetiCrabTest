const ApiError = require('../error/ApiError')
const {Order} = require('../models/models')

class OrderController {

    async createOrder(req, res, next) {
        try {
            const {clientCompanyName, carrierFullName, carrierPhone, comments, status, atiCode} = req.body
            const order = await  Order.create({clientCompanyName, carrierFullName, carrierPhone, comments, status, atiCode})
            return res.json(order)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async updateClientCompanyNameByIdOrder(req, res, next) {
        try {
            const {id, clientCompanyName} = req.body
            const updated = await Order.update({clientCompanyName: clientCompanyName}, {where: {id: id}})
            return res.json(updated)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async updateCarrierFullNameByIdOrder(req, res, next) {
        try {
            const {id, carrierFullName} = req.body
            const updated = await Order.update({carrierFullName: carrierFullName}, {where: {id: id}})
            return res.json(updated)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async updateCarrierPhoneByIdOrder(req, res, next) {
        try {
            const {id, carrierPhone} = req.body
            const updated = await Order.update({carrierPhone: carrierPhone}, {where: {id: id}})
            return res.json(updated)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async updateCommentsByIdOrder(req, res, next) {
        try {
            const {id, comments} = req.body
            const updated = await Order.update({comments: comments}, {where: {id: id}})
            return res.json(updated)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async updateStatusByIdOrder(req, res, next) {
        try {
            const {id, status} = req.body
            const updated = await Order.update({status: status}, {where: {id: id}})
            return res.json(updated)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async updateAtiCodeByIdOrder(req, res, next) {
        try {
            const {id, atiCode} = req.body
            const updated = await Order.update({atiCode: atiCode}, {where: {id: id}})
            return res.json(updated)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async deleteOrderById(req, res, next) {
        try {
            const {id} = req.body
            const deleted = await Order.destroy({where: {id: id}})
            return res.json(deleted)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAllOrders(req, res, next) {
        try {
            const orders = await Order.findAll()
            return res.json(orders)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new OrderController()