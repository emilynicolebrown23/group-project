const express = require("express")
const shelterRouter = express.Router()
const Shelter = require('../models/shelterList.js')


// GET ONE
shelterRouter.get('/:state', (req, res, next) => {
    Shelter.find({state: req.params.state}, (err, foundShelter) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(foundShelter)
    })
})

shelterRouter.post("/", (req, res, next) => {
    const newShelter = new Shelter(req.body)
    newShelter.save((err, newShelterData) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(newShelterData)
    })
})

module.exports = shelterRouter