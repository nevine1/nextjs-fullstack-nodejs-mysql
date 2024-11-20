module.exports = (sequelize, DataTypes) => {
    const Comments = sequelize.define("Comments", {
      comment: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    Comments.associate = (models) => {
      Comments.belongsTo(models.Posts, {
        foreignKey: 'postId',
        as: 'post',
        onDelete: "CASCADE",
      });
    };
  
    
    return Comments;
  };
  