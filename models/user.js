'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // Define association: User has many Logbooks
      User.hasMany(models.Logbook, {
        foreignKey: 'id_mahasiswa', // Nama foreign key di tabel Logbook
        as: 'logbooks', // Alias untuk relasi
      });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
