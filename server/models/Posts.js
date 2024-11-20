module.exports = (sequelize, DataTypes) => {
    const Posts = sequelize.define("Posts", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      postText: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
    
    /* Posts.associate = (models) => {
      Posts.hasMany(models.Comments, {
        onDelete: "cascade",
      });
    }; */


    Posts.associate = (models) => {
      Posts.hasMany(models.Comments, {
        foreignKey: 'postId', // Specify the foreign key explicitly
        as: 'comments',
        onDelete: "CASCADE",
      });
    };
    return Posts;
  };
  