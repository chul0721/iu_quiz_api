import { Request, Response } from 'express'

const quiz = (req: Request, res: Response):any => {
    console.log('\x1b[35m%s\x1b[32m%s\x1b[0m', '[Request]',` Request in : ${req.socket.remoteAddress}`, '(Quiz)')
    if(!req.query.honorifics) {
        return (
            res.status(400).end('requires honorifics params')
        )
    } else {
        if(req.query.hint) {

        }
        if(req.query.difficulty) {

        }
    }
}

export default quiz