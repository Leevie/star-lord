module.exports = function(sequelize, DataTypes) {
    // Added code here to create an Events model
    // 'return' the events after defining
      var Events = sequelize.define("Events", {
      title: {
          type: DataTypes.STRING,
          allowNull: false
      },
      date: {
          type: DataTypes.STRING, //might need to change STRING
          allowNull: false
      },
      description: { //For now we aren't incorporating this into the site
        type: DataTypes.TEXT,
        allowNull: false
    },
    favorited: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
  });
    return Events;
  };