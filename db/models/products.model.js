const { Model, DataTypes, Sequelize } = require('sequelize');

const PRODUCTS_TABLE = 'products';

const ProductSchema = {
  id: {
    allowNull: false,
    autoImcrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  price: {
    allowNull: false,
    type: DataTypes.DECIMAL
  },
  image: {
    allowNull: true,
    type: DataTypes.STRING
  },
  createdAt:{
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }

}

class Products extends Model{
  static associate(){
    //models
  }

  static config(sequelize){
    return{
      sequelize,
      tableName: PRODUCTS_TABLE,
      modelName: 'Products',
      timestamsp: false
    }
  }
}

module.exports = {PRODUCTS_TABLE, ProductSchema, Products}
