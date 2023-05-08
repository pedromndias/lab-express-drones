const express = require('express');
const router = express.Router();

const Drone = require("../models/Drone.model")

// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  Drone.find()
  .then((allDrones) => {
    // console.log(allDrones)
    res.render("drones/list.hbs", {
      allDrones
    })
    
  })
  .catch((err) => {
    next(err)
  })
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form")
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const {name, propellers, maxSpeed} = req.body;
  Drone.create({
    name,
    propellers,
    maxSpeed
  })
  .then(()=> {
    console.log("Drones added", req.body)
    res.redirect("/drones")
  })
  .catch((err) => {
    next(err)
  })
  
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // console.log(req.params)
  Drone.findById(req.params.id)
  .then((singleDrone) => {
    // console.log(singleDrone)
    res.render("drones/update-form.hbs", {
      singleDrone
    })
  })
  .catch((err) => {
    next(err)
  })
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
    const {name, propellers, maxSpeed } = req.body;
    // console.log(req.body)
    Drone.findByIdAndUpdate(req.params.id, {
      name,
      propellers,
      maxSpeed
    }, { new : true })
    .then(() => {
      res.redirect("/drones")
    })
    .catch((err) => {
      next(err)
    })
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // console.log(req.params)
  Drone.findByIdAndDelete(req.params.id)
  .then(() => {
    res.redirect("/drones")
  })
  .catch((err) => {
    next(err)
  })

});

module.exports = router;
