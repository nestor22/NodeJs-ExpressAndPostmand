const { User, UserSchema } = require('./user.model');
const { Costumer, CostumerSchema } = require('./costumer.model');
const { Customer } = require('./customer.model');


function setupModels(sequelize){
  User.init(UserSchema, User.config(sequelize));
  Costumer.init(CostumerSchema, Costumer.config(sequelize));

  Customer.associate(sequelize.models)
}

module.exports = setupModels;

