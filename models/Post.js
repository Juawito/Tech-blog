const { Model, DataTypes } = require('sequelize');
const sequalize = require('../config/config');

class Post extends Model {}

Post.init(
    {
        id: {
            type: DataTypes.INTERGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
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
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }
)

module.exports = Post;