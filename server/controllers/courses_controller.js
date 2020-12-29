const express = require('express')
const Course = require('../models/course')
const router = express.Router()

router.post('/', function(req, res){
  console.log(req.body)
  let c = new Course({
    name: req.body.name,
    durationTime: req.body.durationTime
  });

  c.save((err, cour) => {
    if(err)
    res.status(500).send(err)
    else
    res.status(200).send(cour)
  })
})

router.get('/', function(req, res){
  console.log(req.body)

  Course.find().exec((err, cours) => {
    if(err)
    res.status(500).send(err)
    else
    res.status(200).send(cours)
  })
})

router.patch('/:id',(req, res)=>{
  course.findById(
req.params.id, (err, cour)=>{
  if (err)
  res.status(500).send(err)
  else if(!cour)
  res.status(400).send({})
else{
    cour.name = req.body.name
    cour.save()
    .then((c)=>res.status(200).send(c))
    .catch((e)=>res.status(500).send(e))
}

}
  )
})

module.exports = router
