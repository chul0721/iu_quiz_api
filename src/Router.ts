import api from './api/index'
import express from 'express'

const Router = (app:any, port:any) => {
    app.use(express.json());
    app.use(express.urlencoded({
      extended: true
    }));

    api(app)

    app.listen(port, () => {
        console.log('\x1b[36m%s\x1b[34m%s\x1b[0m', '[Server]',` Server on : ${port}`)
    })
}

export default Router