module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define(
    "User",
    {
      userName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          isEmail: true
        }
      },
      phone: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          isNumeric: true
        }
      }
    },
    { timestamps: false }
  );

  User.associate = function(models) {
    User.hasMany(models.Task);
  };
  return User;
};
