import express from 'express'
import router from './src/Router'
import knex from 'knex'
import dotenv from 'dotenv'

const app = express()
const port = 1993
dotenv.config()
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

const db = knex({
    client: 'mysql',
    connection: {
        host: `${process.env.DB_HOST}`,
        user: `${process.env.DB_USER}`,
        database: `${process.env.DB_NAME}`,
        password: `${process.env.DB_PW}`
    }
})

app.set('db', db)
app.use(router)


app.listen(port, () => {
    console.log('\x1b[36m%s\x1b[34m%s\x1b[0m', '[Server]',` Server on : ${port}`)
})