import e, { Request, Response } from "express"

const hello = (req: Request, res: Response) => {
    if(!req.body.name){
        return (
            res.send('✅')
        )
    } else {
        return (
            res.send(`✅ | Verified ${req.body.name}`)
        )
    }
}

export default hello