import { DataTypes, Model, Optional } from 'sequelize'
import { sequelizeConnection } from '../../config/database'

class User extends Model {
  public userId! : number
  public name! : string
  public email! : string
  public password! : string

  public readonly createdAt! : Date
  public readonly updatedAt! : Date
}

User.init({
  userId: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING
  }
}, {
  tableName: 'users',
  timestamps: true,
  sequelize: sequelizeConnection,
  underscored: false
})

export default User