const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Order = sequelize.define('order', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    created_at: {type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW},
    clientCompanyName: {type: DataTypes.STRING, allowNull: false},
    carrierFullName: {type: DataTypes.STRING, allowNull: false},
    carrierPhone: {type: DataTypes.STRING, allowNull: false},
    comments: {type: DataTypes.TEXT, allowNull: true},
    status: {type: DataTypes.ENUM('Новая', 'В работе', 'Завершено'),defaultValue: 'Новая',allowNull: false},
    atiCode: {type: DataTypes.INTEGER, allowNull: true}
})

module.exports = {
    Order
}