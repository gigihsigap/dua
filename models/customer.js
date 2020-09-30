'use strict';
const {
  Model
} = require('sequelize');
const { test } = require('../controllers/controller');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Customer.init({
    identityNumber: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Identity Number must be filled'
        },
        checkLength(value) {
          let regex = RegExp('(?=.{16,20})')
          if (!regex.test(value)) {
            throw new Error('Identity Number minimum 16 characters and maximum 20 characters')
          }
        },
        checkDuplicate(value) {

        },
      }
    },
    fullName: DataTypes.STRING,
    address: DataTypes.STRING,
    birthDate: DataTypes.DATE,
    gender: DataTypes.STRING,
    otp: DataTypes.STRING
  }, {
    sequelize,
    indexes: [{unique: true, fields: ['identityNumber', 'otp']}],
    modelName: 'Customer',
  });
  return Customer;
};