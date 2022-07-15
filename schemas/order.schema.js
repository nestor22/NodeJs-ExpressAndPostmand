const Joi = require('joi');

const id = Joi.number().integer();
const customerId = Joi.number().interger();

const getOrderSchema = Joi.object({
  id: id.required(),
})

const createOrderSchema = Joi.object({
  customerId: customerIdid.required(),
})

module.exports = { getOrderSchema, createOrderSchema }
