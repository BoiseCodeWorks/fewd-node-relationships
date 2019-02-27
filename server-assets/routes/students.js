let router = require('express').Router()
let Students = require("../models/Student")

//get all students
router.get('/', (req, res, next) => {
  Students.find({})
    .then(students => res.status(200).send(students))
    .catch(e => res.status(400).send({error: e}))
})

//get all students by school - our one to many relationship
router.get('/:schoolId', (req, res, next) => {
  Students.find({ school: req.params.schoolId })
    .then(students => res.status(200).send(students))
    .catch(e => res.status(400).send({error: e}))
  })

router.post('/', (req, res, next) => {
  Students.create(req.body)
  .then(student => res.status(201).send(student))
  .catch(e => res.status(400).send({error: e}))
})

module.exports = router