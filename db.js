import Sequelize from 'sequelize'

const sequelize = new Sequelize(
    process.env.Db_Name,
    process.env.Db_User,
    process.env.Db_Pass, {
        host: process.env.host,
        dialect: process.env.Db_Dialect,
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            }
        }
    }
)

export default sequelize