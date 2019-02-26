let mongoose = require('mongoose')
let connectionStr = "mongodb+srv://iamporter:top-secret1@porters-pizza-shack-x0nuc.azure.mongodb.net/test?retryWrites=true"
let connection = mongoose.connection

mongoose.connect(connectionStr, { useNewUrlParser: true })

connection.on('error', err => console.log('DB ERROR:', err))

connection.once('open', () => console.log('connected to the database!'))