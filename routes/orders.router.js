const express = require('express');

const OrderService = require('../services/order.service');

const { getOrderSchema, createOrderSchema } = require('../schemas/order.schema');
const validatorHandler = require('../middlewares/validator.handler');

const router = express.Router();
const service = new OrderService();

router.get('/:id', validatorHandler(getOrderSchema, 'params'),
async (req, res, next)=>{
  try{
    const {id} = req.params;
    const order = await service.findOne(id);
    res.json(order);
  }catch(err){
    next(err);
  }
});

router.post('/', ValidatorHandler(createOrderSchema, 'body'),
  async(req, res, next) => {
    try{
      const body = req.body;
      const newOrder = await service.create(body);
      res.status(201).json(newOrder);
    }catch(err){
      next(err)
    }
  }
)

module.exports = router;
