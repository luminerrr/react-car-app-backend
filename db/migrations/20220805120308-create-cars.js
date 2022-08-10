'use strict';

const { sequelize } = require("../../app/models");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Cars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      carName: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      model: {
        type: Sequelize.STRING
      },
      capacity:{
        type: Sequelize.INTEGER
      },
      transmission:{
        type: Sequelize.STRING
      },
      year:{
        type:Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }),
    queryInterface.addColumn(
      'Cars', 'capacity', {
        type: Sequelize.STRING
      }),
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Cars');
  }
};