module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    userName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    emial: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    phone: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate: {
        unique: true,
        isNumeric: true
      }
    }
  });
  User.associate = function(models) {
    User.hasMany(models.Task);
  };
  return User;
};
