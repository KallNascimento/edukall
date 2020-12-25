const express = require('express')
const router = express.Router()
const Courses = require('../models/courses')

router.post('/', function(req, res){
  console.log(req.body)
  let course = new Courses({
    name: req.body.name,
    durationTime: req.body.durationTime
  });

  course.save((err, cour) => {
    if(err)
    res.status(500).send(err)
    else
    res.status(200).send(cour)
  })
})

router.get('/', function(req, res){
  console.log(req.body)

  course.find().exec((err, cours) => {
    if(err)
    res.status(500).send(err)
    else
    res.status(200).send(cours)
  })
})

