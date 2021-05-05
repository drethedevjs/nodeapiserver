import { addPerson, getPerson, getAllPeople, updatePerson } from '../controllers/personController'

const routes = (app) => {
    app.route('/sparkpost/:name')
        .get(getPerson)
        .put(updatePerson)
        
    app.route('/sparkpost')
        .get(getAllPeople)
        .post(addPerson)
}

export default routes;