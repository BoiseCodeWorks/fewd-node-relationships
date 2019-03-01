let router = require('express').Router()
let Students = require("../models/Student")
let Classrooms = require("../models/Classroom")

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

//this method keeps field values and builds upon them safely
router.put('/:id/classrooms', (req, res, next) => {
  Students.findById(req.params.id)
    .then(student => {
      return student.update({ $addToSet: { classrooms: { $each: req.body.classrooms } } })
    })
    .then(() => res.send("Student Updated"))
    .catch(next)
  })

//this method safely updates the student's classrooms array and then goes and updates all of the corresponding classes to include that student
  router.put('/:id/classrooms/2', (req, res, next) => {
    Students.findById(req.params.id)
      .then(student => {
        return student.update({ $addToSet: { classrooms: { $each: req.body.classrooms } } })
      })
      .then(() => {
        Classrooms.find({_id: { $in: req.body.classrooms }})
          .then(classrooms => {
            return Promise.all(classrooms.map(classroom => {
              return classroom.update({ $addToSet: { students: req.params.id } })
            }))
          })
      })
      .then(() => res.send("Student and corresponding Classrooms Updated!"))
      .catch(next)
  })

module.exports = router