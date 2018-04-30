"use strict";
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.STRING,
        autoIncrement: true,
        primaryKey: true
      },
      authId: DataTypes.STRING,
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      role: DataTypes.STRING
    },
    {
      freezeTableName: true
    },
    {
      classMethods: {
        associate: function(models) {
          // associations can be defined here
        }
      }
    }
  );

  return User;
};
