import mongoose from 'mongoose'
import { PeopleSchema } from '../models/personModel'

// Creating a model using the PeopleSchema in order make calls to the database
const People = mongoose.model('People', PeopleSchema);

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

export const getPerson = (req, res) => {
    // console.log("LOOK HEREEEEEEE!!!!", req.params.name);
    People.find({name: req.params.name}, (err, person) => {
        if(err) 
            res.send(err);
    
        // Adding the retrieved information from the db to the json object being returned
        res.json(person);
    });
}