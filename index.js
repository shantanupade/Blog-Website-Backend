import mysql from 'mysql';
import app from './app.js'
import config from './config/index.js'

const { createConnection } = mysql;

(async () => {
    try {
        var connection = mysql.createConnection({
            host: config.MySql_host,
            user: config.MySql_user,
            password: config.MySql_password,
            database: config.MySql_database,
        });

        connection.connect(function (err) {
            if (err) {
                console.error('Database connection failed: ' + err.stack);
                return;
            }
            console.log('Connected to database.');
        });

        const onListening = () => {
            console.log(`Listening on ${config.PORT}`);
        }

        app.listen(config.PORT, onListening)

    } catch (err) {
        console.log("ERROR ", err);
        throw err
    }
})()