const express = require('express')
const SchoolClass = require('../models/schoolClass')
const router = express.Router()

router.post('/', function(req, res){
  let sc = new SchoolClass({
    name: req.body.name,
    module: req.body.module,
    status:req.body.status
  });

  sc.save((err, school)=>{
    if(err)
    res.status(500).send(err)
    else
    res.status(200).send(school)
  })
})

router.get('/',function(req, res){
  SchoolClass.find().exec((err, school)=>{
    if(err)
    res.status(500).send(err)
    else
    res.status(200).send(school)
  })
})

module.exports = router
