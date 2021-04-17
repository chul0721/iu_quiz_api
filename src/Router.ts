import './api'

const Router = (app:any, port:any) => {
    app.listen(port, () => {
        console.log('\x1b[36m%s\x1b[34m%s\x1b[0m', '[Server]',` Server on : ${port}`);
    })
}

export default Router