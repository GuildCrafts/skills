import express from 'express'


const router = new express.Router

router.use(require('./authentication'))

router.get('/session', (req, res) => {
  res.json({
    user: req.session.passport.user
  })
})
// router.use(require('./api'))

export default router
