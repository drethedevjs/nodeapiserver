import { addPerson } from '../controllers/personController'
const routes = (app) => {
    app.route('/sparkpost/:name')
        .get((req, res) => {
            res.send("Hit it!");
        })
        
        
    app.route('/sparkpost')
        
        .post(addPerson, person)

        .put((req, res) => {
            res.send("updated!")
        })
        
}

export default routes;