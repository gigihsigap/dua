'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Account.init({
    type: DataTypes.STRING,
    balance: {
      type: DataTypes.FLOAT,
      checkValue(value) {
        if (value < 500000) {
          throw new Error('Minimum balance for new Account: Rp500.000')
        }
      }
    },
    accountNumber: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Account',
  });
  return Account;
};