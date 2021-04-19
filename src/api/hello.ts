import { Request, Response } from 'express'

const hello = (req: Request, res: Response):Response => {
    console.log('\x1b[35m%s\x1b[32m%s\x1b[0m', '[Request]',` Request in : ${req.socket.remoteAddress}`, '(Hello World)')
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