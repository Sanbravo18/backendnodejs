const { MongoClient, ObjectId } = require('mongodb');
const {config } = requiere('../config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${DB_NAME}?retryWrite=true&w=majority`;

class MongoLIb {
    constructor() {
        this.client = new MongoClient(MONGO_URI, {userNameUrlParse : true });
        this.dbName = DB_NAME;
    }
    connect() {
        if (!MongoLIb.connect){
            MongoLIb.connection = new Promise((resolve,reject) => {
                this.client.connect(err => {
                    if (err) {
                        reject(err);
                    }
                    console.log('Connected succesfully to mongo');
                    resolve(this.client.db(this.dbName));
                    
                })
            })
        }
        return MongoLIb.connection;
    }
}
module.exports = MongoLIb;