'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn("posts", "userid",{
      type: Sequelize.INTERGER, 
      references:{
        model: "users",
        key:"id"
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn("posts", "userid");
  }
};
