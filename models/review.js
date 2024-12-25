'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate(models) {
      // Define association: Review belongs to User
      Review.belongsTo(models.User, {
        foreignKey: 'id_mahasiswa', // Nama foreign key di tabel Review
        as: 'mahasiswa', // Alias untuk relasi
      });
      Review.belongsTo(models.Item, {
        foreignKey: "id_item", // Nama foreign key di tabel Review
        as: "item", // Alias untuk relasi
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      });
    }
  }
  Review.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      id_mahasiswa: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      id_item: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      instruction: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      file: {
        type: DataTypes.TEXT,
        allowNull: true,  // nullable because it can be nil in the struct
      },
      revisi: {
        type: DataTypes.TEXT,
        allowNull: true,  // nullable because it can be nil in the struct
      },
      date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
      }
    },
    {
      sequelize,
      timestamps: false,
      modelName: 'Review',
    }
  );
  return Review;
};
