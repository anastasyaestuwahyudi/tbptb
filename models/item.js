'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    static associate(models) {
      // Define association: Item belongs to User
      Item.belongsTo(models.User, {
        foreignKey: 'id_mahasiswa', // Nama foreign key di tabel Item
        as: 'mahasiswa', // Alias untuk relasi
      });

      Item.hasMany(models.Review, {
        foreignKey: "id_item", // This is assuming the foreign key in the orders table is product_id
        as: "reviews", // Alias for the related orders
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      });
    }
  }
  Item.init(
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
      file: {
        type: DataTypes.TEXT,
        allowNull: true,  // nullable because it can be nil in the struct
      },
      revisi: {
        type: DataTypes.TEXT,
        allowNull: true,  // nullable because it can be nil in the struct
      }
    },
    {
      sequelize,
      timestamps: false,
      modelName: 'Item',
    }
  );
  return Item;
};
