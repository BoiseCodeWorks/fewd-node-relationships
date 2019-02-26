let router = require('express').Router()
let Principals = require('../models/Principal')


router.get('/', (req, res, next) => {
  Principals.find({})
    .then(principals => res.send(principals))
    .catch(e => res.send(e))
})


router.post('/', (req, res, next) => {
  Principals.create(req.body)
    .then(principal => res.send(principal))
    .catch(e => res.send(e))
})

router.put('/:id', (req, res, next) => {
  Principals.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(principal => res.send(principal))
    .catch(e => res.send(e))
})

module.exports = router