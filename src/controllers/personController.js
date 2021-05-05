import mongoose from 'mongoose'
import { PeopleSchema } from '../models/personModel'

// Creating a model using the PeopleSchema in order to pass relavent data to the db
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