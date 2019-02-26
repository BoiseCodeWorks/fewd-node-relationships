let router = require('express').Router()
let Schools = require('../models/School')

//get all schools
router.get('/', (req, res, next) => {
  Schools.find({})
    .then(schools => res.send(schools))
    .catch(e => res.send(e))
})

//get one school
router.get('/:id', (req, res, next) => {
  Schools.findById(req.params.id).populate({path: 'principal'}).exec((error, school) => {
    if (error) {
      return res.status(400).send(error)
    }
    res.send(school)
  })
})


//create a school
router.post('/', (req, res, next) => {
  Schools.create(req.body)
    .then(school => res.send(school))
    .catch(e => res.send(e))
})

//update
router.put('/:schoolId', (req, res, next) => {
  Schools.findByIdAndUpdate(req.params.schoolId, req.body, {new: true})
    .then(school => res.send(school))
    .catch(e => res.send(e))
})

module.exports = router