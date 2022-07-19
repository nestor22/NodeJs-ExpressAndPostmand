const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class OrderService {
  constructor() {}
  async create(data) {
    const newOrder = await models.Order.create(data);
    return newOrder;
  }

  async addItem(data) {
    const newItem = await modes.OrderProduct.create(data);
    return newItem;
  }

  async find() {
    const newOrder = await models.Order.findAll();
    return newOrder;
  }

  async findOne(id) {
    const newOrder = await models.Order.findByPk(id, {
      include: [{ association: 'customer', include: ['user'] }, 'items'],
    });
    return newOrder;
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }
}

module.exports = OrderService;
