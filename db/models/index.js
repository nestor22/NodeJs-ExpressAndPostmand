const { User, UserSchema } = require('./user.model');
const { Customer, CustomerSchema } = require('./customer.model');
const { Category, CategorySchema } = require('./categories.model');
const { Product, ProductSchema } = require('./products.model');
const { Order, OrderSchema } = require('./orders.model');
const { OrderProdcut, OrderProductSchema } = require('./order-products.model')



function setupModels(sequelize){
  User.init(UserSchema, User.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Order.init(OrderSchema, Order.config(sequelize));
  OrderProdcut.init(OrderProductSchema, OrderProdcut.config(sequelize));

  User.associate(sequelize.models)
  Customer.associate(sequelize.models)
  Category.associate(sequelize.models)
  Order.associate(sequelize.models)
  OrderProdcut.associate(sequelize.models)
}

module.exports = setupModels;

