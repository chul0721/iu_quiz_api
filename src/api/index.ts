const api = (app:any, ) => {
    return (
        app.post(`/api/hello`, (req:any, res:any) => {
            res.send('✅')
        })
    )
}

export default api