import express from 'express'
import Router from './src/Router'

const app = express()
let port = 1993

Router(app, port)