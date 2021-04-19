import { Request, Response } from 'express'

const main = (req: Request, res: Response):any => {
    console.log('\x1b[35m%s\x1b[32m%s\x1b[0m', '[Request]',` Request in : ${req.socket.remoteAddress}`, '(Main)')
    return (
        res.redirect('https://github.com/chul0721/iu_quiz_api')
    )
}

export default main