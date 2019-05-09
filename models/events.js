module.exports = function(sequelize, DataTypes) {
    // Add code here to create a Post model
    // This model needs a title, a body, and a category
    // Don't forget to 'return' the post after defining
      var Events = sequelize.define("Events", {
      title: {
          type: DataTypes.STRING,
          allowNull: false
      },
      date: {
          type: DataTypes.STRING, //might need to change STRING
          allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false
    }
  });
    return Events;
  };