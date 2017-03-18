var config = require('../../../config');
var Game = require('../../models/GameData');

var data = {

    getAllGameData: function(req, res) {

        Game.find({}, function(err, game) {
            if (err) {
                res.send(err);
                return;
            }

            res.json(game);
        });
    }


}
module.exports = data;
