import db from './firebase.js';

const Config = {
    mongoDB: {
        uri: 'mongodb+srv://test:987654321@cluster0.lgku1zi.mongodb.net/?retryWrites=true&w=majority',
        options: {
            serverSelectionTimeoutMS: 4000
        }
    },
    fs: './db',
    firebase: db
}

export default Config;