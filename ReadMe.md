# Introduction
Thank you for the opportunity to move forward in the interview process. I must say that I enjoy this project and learned a lot.

## Making it Work
### Necessary Tools
1. A api tester like PostMan.
2. A terminal.
3. (Optional) A GUI for the database like Studio T3 to see the data.

### Necessary Technologies
1. Node
2. Mongodb
3. Mongoose
4. Express
5. Babel

The references to these packages and their versions are in the package.json file.

### Steps
1. Run the following inside your terminal:
`brew services start mongodb-community@4.4` to start mongodb as a service then `npm start` to start the api. You should see a message in your terminal indicating that the server is listening on port 2222.
2. Open Postman and run the following requests in the logical order (i.e. getting data that hasn't been posted might be a waste of your time).
3. When done, run the following command inside your terminal to stop Mongodb: `brew services stop mongodb-community@4.4` 

### Requests
- GET - http://localhost:2222/sparkpost/tim
- GET (all) - http://localhost:2222/sparkpost

- POST - http://localhost:2222/sparkpost w/ payload `{ name: 'Tim', age: '99' }`

- PUT - http://localhost:2222/sparkpost/tim w/ payload `{ name: 'Tim', age: '1' }`