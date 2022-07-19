const Joi = require('joi');

const id = Joi.number().integer();
const customerId = Joi.number().interger();
const orderId = Joi.number().integer();
const productId = Joi.number().interger();
const amount = Joi.number().interger().min(1)


const getOrderSchema = Joi.object({
  id: id.required(),
})

const createOrderSchema = Joi.object({
  customerId: customerIdid.required(),
})


const addItemSchema = Joi.object({
  orderId: orderId.required(),
  productId: productId.required(),
  amount: amount.required(),
})

module.exports = { getOrderSchema, createOrderSchema, addItemSchema }

