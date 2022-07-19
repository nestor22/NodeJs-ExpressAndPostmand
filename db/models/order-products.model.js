const { Model, DataTypes, Sequelize } = require('sequelize');
const { ORDER_TABLE } = require('./orders.model');
const { PRODUCTS_TABLE } = require('./products.model');
const ORDER_PRODUCTO_TABLE = 'orders_products';

const OrderProductSchema = {
  id:{
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  orderId:{
    field: 'order_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: ORDER_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  productId:{
    field: 'product_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: PRODUCTS_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  amount: {
    allowNull:false,
    type:DataTypes.INTEGER
  },
  createdteAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  }
}


class OrderProdcut extends Model {
  static associate(models){
   //
  }

  static config(sequelize){
    return{
      sequelize,
      tableName:OERDER_PRODUCT_TABLE,
      modelName: 'OrderProduct',
      timestamsp: false
    }
  }
}

module.exports = {OrderProdcut, OrderProductSchema, ORDER_PRODUCTO_TABLE}
