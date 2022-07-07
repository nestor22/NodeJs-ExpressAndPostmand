'use strict';

const { CategorySchema,  CATEGORY_TABLE} = require('./../models/categories.model');
const { ProductSchema,  PRODUCTS_TABLE} = require('./../models/products.model');

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema)
    await queryInterface.createTable(PRODUCTS_TABLE, ProductSchema)
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable(CATEGORY_TABLE, CategorySchema)
    await queryInterface.dropTable(PRODUCTS_TABLE, ProductSchema)
  }
};
