import './environment'
import path from 'path'
import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import passport from 'passport'
import session from 'cookie-session'
import http from 'http'
import logger from './logger'
import routes from './routes'

const publicPath = path.resolve(__dirname, '../public')
const httpServer = express()

httpServer.use(morgan('dev', { "stream": logger.stream }));

httpServer.use(session({
  name: 'session',
  keys: [process.env.SESSION_KEY],
}))
httpServer.use(passport.initialize());
httpServer.use(passport.session());
httpServer.use(express.static(publicPath))
httpServer.use(bodyParser.json())
httpServer.use(routes)

httpServer.get('/*', (req, res, next) => {
  if (req.xhr) return next()
  res.sendFile(publicPath+'/index.html')
});

httpServer.start = function(port, callback){
  httpServer.set('port', port)
  console.log(`http://localhost:${port}/`)
  httpServer.listen(port)
  if (callback) callback(httpServer)
  return httpServer
}

export default httpServer
