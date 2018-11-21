const { mongoFind, mongoInsert, mongoDeleteOne } = require('./mongo')
const config = require('./config')

const dbName = 'bot'

mongoInsert(config.MongoDB, dbName, 'logs', {
    name: 'Alex',
    date: new Date().toLocaleString(),
    command: '/test'
})
mongoDeleteOne(config.MongoDB, dbName, 'logs')
mongoFind(config.MongoDB,dbName, 'logs')