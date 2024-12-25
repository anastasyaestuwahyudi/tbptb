'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Logbook extends Model {
    static associate(models) {
      // Define association: Logbook belongs to User
      Logbook.belongsTo(models.User, {
        foreignKey: 'id_mahasiswa', // Nama foreign key di tabel Logbook
        as: 'mahasiswa', // Alias untuk relasi
      });
    }
  }
  Logbook.init(
    {
      tanggal: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      topik_pekerjaan: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      deskripsi: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      id_mahasiswa: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Logbook',
    }
  );
  return Logbook;
};
