'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoincrement: true,
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        unnique: true,
        type: Sequelize.STRING
      },
      avatar: {
        allowNull: false,
        type: Sequelize.STRING
      },
      passwords_hash: {
        allowNull: false,
        type: Sequelize.STRING
      },
      provider: {
        allowNull: false,
        default: false,
        type: Sequelize.BOOLEAN
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      update_ate: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users')
  }
}
