const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) =>{
    const Comments = sequelize.define("Comments", {
        comment: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });
    return Comments;
}