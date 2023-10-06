const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Reviews', {
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    comments: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  });
};

