
var dataController = require('../controller/data/dataController');




module.exports = function(app, express) {
    var api = express.Router();


    api.get('/getData', dataController.getAllGameData);



    return api;
}
