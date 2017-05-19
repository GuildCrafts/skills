import express from 'express'


const router = new express.Router

router.use(require('./authentication'))

router.get('/session', (req, res) => {
  res.json(req.session)
})
// router.use(require('./api'))

export default router
