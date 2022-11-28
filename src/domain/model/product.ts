import { DataTypes, Model, Optional } from 'sequelize'
import { sequelizeConnection } from '../../config/database'

class Product extends Model {
  public productId! : number
  public productName! : string
  public description! : string
  public stock! : number

  public readonly createdAt! : Date
  public readonly updatedAt! : Date
}

Product.init({
  productId: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  productName: {
    allowNull: false,
    type: DataTypes.STRING
  },
  description: {
    allowNull: false,
    type: DataTypes.STRING
  },
  stock: {
    allowNull: false,
    type: DataTypes.INTEGER
  }
}, {
  timestamps: true,
  sequelize: sequelizeConnection,
  underscored: false
})

export default Product