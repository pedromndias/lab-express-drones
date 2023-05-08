const mongoose = require("mongoose");

const Drone = require("../models/Drone.model")

// Iteration #1
const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
];

require("../db/index");

Drone.create(drones)
.then(() => {
    console.log(drones.length);
    mongoose.connection.close()
})
.catch((err) => {
    console.log(err);
})

