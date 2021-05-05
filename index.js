import express from 'express'
import routes from './src/routes/personRoutes'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

const app = express();
const PORT = 2222;

// Mongoose Connection: To connect to the database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Peopledb', {
    useNewUrlParser: true, // parses mongodb connection strings
    useUnifiedTopology: true // opts in to using the new topology engine. Without this, there will be deprecation warnings because of a refactor.
});

// Setting up body parser in order for our payloads to be usable with/readable by the api
app.use(bodyParser.urlencoded({ extended: true })) // parses the bodies of the http requests
app.use(bodyParser.json()); // parses json objects and adds information to the body property of the request obj

routes(app);

app.get('/', (req, res) =>
    res.send(`Node and express server running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`Server running on port ${PORT}`)
);