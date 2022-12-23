import dotenv from 'dotenv'

dotenv.config()

const config = {
    PORT: process.env.PORT,
    MySql_host: process.env.MySql_host,
    MySql_user: process.env.MySql_user,
    MySql_password: process.env.MySql_password,
    MySql_database: process.env.MySql_database,
}



export default config