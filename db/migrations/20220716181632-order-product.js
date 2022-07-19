'use strict';

const { ORDER_PRODUCTO_TABLE, OrderProductSchema } = require("../models/order-products.model");

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(ORDER_PRODUCTO_TABLE, OrderProductSchema)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.deleteTable(ORDER_PRODUCTO_TABLE)
  }
};
