import { Request, Response } from 'express'

const hello = (req: Request, res: Response):Response => {
    if(!req.query.name){
        return (
            res.send('✅')
        )
    } else {
        return (
            res.send(`✅ | Verified, ${req.query.name}!`)
        )
    }
}

export default hello