# Introduction
Software Developer Candidate: Andre Thomas  

This is an API server built using NodeJS to simply add objects to a mongodb database and it allows users to update those entries.

## Making it Work
### Necessary Tools
1. An API client like PostMan.
2. A terminal.
3. (Optional) A GUI for the database like [Studio 3T](https://studio3t.com/download/) to see the data.

### Necessary Technologies
1. Node
2. Mongodb
3. Mongoose
4. Express
5. Babel

The references to these packages and their versions are in the `package.json` file.

### Steps
1. Clone the repo to a local directory and navigate to it using your terminal.
1. Run the following inside your terminal:
`brew services start mongodb-community@4.4` to start mongodb as a service then `npm start` to start the api. You should see a message in your terminal indicating that the server is listening on port 2222.
2. Open your API client and hit the endpoints using the links below in the logical order (i.e. requesting data that has not been added to the database might be a waste of your time).
3. When done, run the following command inside your terminal to stop Mongodb: `brew services stop mongodb-community@4.4` 

### Requests
- GET - http://localhost:2222/sparkpost/tim
- GET (all) - http://localhost:2222/sparkpost

- POST - http://localhost:2222/sparkpost w/ payload `{ name: 'Tim', age: '99' }`

- PUT - http://localhost:2222/sparkpost/tim w/ payload `{ name: 'Tim', age: '1' }`

## Notes from the Developer
- In your email, you gave an example to update an entry using a payload that has the name and age property. I elected to have the name be passed in the query and just pass the age in the body. I figured that's what you meant but I could be wrong. If so, let me know and I'll update the code.
- I included the `node_packages` folder which has made this repo relatively  large. I did it so that there might be one less step in getting this set up on your machine--so you won't have to use more time downloading all that is necessary to run the service.
- The instructions above are for macOS users. Jordan said that most (if not, all) of you are Mac users (whoop whoop! I love Apple) so I didn't bother to add instructions for Windows.
- I added one extra endpoint to get all the people added to the database because it is just a helpful endpoint to have in general. I figured if you're going to be adding a lot of people while testing this then you'll want to know what all has been added.

## Edge Cases
I kept this pretty simple so I didn't account for all possible issues that could go wrong during a typcial use of this api server but I wanted to share them here so that you know that I am aware of them. They all center around the possibilty of duplicate data.

1. The db allows for users to add duplicate entries. Of course, they aren't really duplicates because of the different `Id` assigned to them, nonetheless, this can be problematic if there isn't a way to handle multiple entries with the same name which brings me to my next point...

2. ...updating. It would be better to update by Id because there is the possibilty of duplicate entries. This server can't tell the different between two db entries going off just the name to update the `age` property.

3. Duplication also effects the GET call to retrieve a user by `name`. The way it's written now, the server wouldn't be able to distinguish between multiple users with the same name.