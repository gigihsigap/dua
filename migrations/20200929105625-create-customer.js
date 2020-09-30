'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Customers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      identityNumber: {
        type: Sequelize.STRING
      },
      fullName: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      birthDate: {
        type: Sequelize.DATE
      },
      gender: {
        type: Sequelize.STRING
      },
      otp: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Customers');
  }
};
