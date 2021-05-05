import mongoose from 'mongoose'
import { PeopleSchema } from '../models/personModel'

// Creating a model using the PeopleSchema in order make calls to the database
const People = mongoose.model('People', PeopleSchema);

// GET Methods
export const getPerson = (req, res) => {
    // Finding data where the name param equals the passed in query string
    People.find({name: req.params.name}, (err, person) => {
        if(err) 
            res.send(err);
    
        // Adding the retrieved information from the db to the json object being returned
        res.json(person);
    });
}

export const getAllPeople = (req, res) => {
    People.find({}, (err, person) => {
        if(err) 
            res.send(err);
    
        // Adding the retrieved information from the db to the json object being returned
        res.json(person);
    })
}

// POST Methods
export const addPerson = (req, res) => {
    // Create a new person using the model creator above and the json obj that's being passed
    // into the request.
    let newPerson = new People(req.body);

    // Calling the save method on this object to commit it to the database.
    newPerson.save((err, person) => {
        if(err) 
            res.send(err);
        
        // Adding the new information from the db to the json object being returned
        res.json(person);
    })
}

// PUT Methods
export const updatePerson = (req, res) => {
    // Finding the record with the matching name and updating the age property
    // Option 1: new - setting to "true" so that the db returns the new object  
    // Option 2: useFindAndModify - To remove deprecated errors.
    People.findOneAndUpdate({ name: req.params.name }, req.body, { new: true, useFindAndModify: false }, (err, person) => {
        if(err) 
            res.send(err);
        
        // Adding the new information from the db to the json object being returned
        res.json(person);
    })
}

