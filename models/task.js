module.exports = function(sequelize, DataTypes) {
    var Task = sequelize.define("Task", {
      taskName: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Enter a task.'
          }             
         }
        },
     due_date: {
        type: DataTypes.DATE,
        allowNull: true,
        validate: {
          isDate: {
            msg: 'Enter a date.'
          }
         }
        },
     completed: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: Y/N, 
        validate: {
            is: ["Y","y","N","n"],
           }         
         }           
    });
    Task.associate = function(models) {
      Task.belongsTo(models.User);
    };
    return Task;
};
