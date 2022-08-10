'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'Cars',
        'capacity',
        {
          type:Sequelize.INTEGER
        }
      ),
      queryInterface.addColumn(
        'Cars',
        'transmission',
        {
          type:Sequelize.STRING
        }
      ),
      queryInterface.addColumn(
        'Cars',
        'year',
        {
          type:Sequelize.INTEGER
        }
      )

    ]) 
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('Cars','capacity'),
      queryInterface.removeColumn('Cars','transmission'),
      queryInterface.removeColumn('Cars','year')
    ])
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
