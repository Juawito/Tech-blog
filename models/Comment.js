const { Model, DataTypes } = require('sequelize');
const sequalize = require('../config/config');

class Comment extends Model {

}

Comment.init (
    {
        id: {
            type: DataTypes.INTERGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        postId: {
            type: DataTypes.INTERGER,
            allowNull: false,
            references: {
                model: 'post',
                key: 'id'
            },
        },
        userId: {
            type: DataTypes.INTERGER, 
            allowNull: false,
            references: {
                model: 'user', 
                key: 'id',
            },
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment'
    }
)

module.exports = Comment;