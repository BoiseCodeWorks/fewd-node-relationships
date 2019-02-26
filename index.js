let express = require('express')
let bp = require('body-parser')
let server = express()
let PORT = 3000
require('./server-assets/db/db-config')

server.use(bp.json())
server.use(bp.urlencoded({
  extended: true
}))

//above is always the same, usually

let schoolRoutes = require('./server-assets/routes/schools')
server.use('/api/schools', schoolRoutes)
let principalRoutes = require('./server-assets/routes/principals')
server.use('/api/principals', principalRoutes)









server.listen(PORT, () => console.log('port is running on', PORT))