import { addPerson, getPerson } from '../controllers/personController'

const routes = (app) => {
    app.route('/sparkpost/:name')
        .get(getPerson)
        
        
    app.route('/sparkpost')
        
        .post(addPerson)

        .put((req, res) => {
            res.send("updated!")
        })
        
}

export default routes;