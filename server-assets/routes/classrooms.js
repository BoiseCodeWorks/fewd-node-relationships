let router = require('express').Router()
let Classrooms = require('../models/Classroom')

router.get('/', (req, res, next) => {
  Classrooms.find({})
    .then(classrooms => res.send({count: classrooms.length, classrooms}))
    .catch(next)
})

router.post('/', (req, res, next) => {
  Classrooms.create(req.body)
    .then(classroom => res.send({message: "Classroom Created!!!!", classroom}))
    .catch(next)
})

//this method will blow away old field values and reassign
router.put('/:id/students', (req, res, next) => {
  Classrooms.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(classroom => res.send(classroom))
  .catch(next)
})

module.exports = router


