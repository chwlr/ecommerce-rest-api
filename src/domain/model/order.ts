import { DataTypes, Model, Optional } from 'sequelize'
import {sequelizeConnection} from '../../config/database'
import Product from './product'
import User from './user'

class Order extends Model {
  public orderId! : number
  public userId! : number
  public productId! : number
  public productName! : string
  public quantity! : number

  public readonly createdAt! : Date
  public readonly updatedAt! : Date
}

Order.init({
  orderId: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  userId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'userId'
    }
  },
  productId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: Product,
      key: 'productId'
    }
  },
  productName: {
    allowNull: false,
    type: DataTypes.STRING
  },
  quantity: {
    allowNull: false,
    type: DataTypes.INTEGER
  }

}, {
  timestamps: true,
  sequelize: sequelizeConnection,
  underscored: false
})


export default Order