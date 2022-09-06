const mongoose = require('mongoose')

mongoose.connect('mongodb://mongo/database').then(db=> console.log("db is conected to",db.connection.host)).catch(err=> console.error(err))