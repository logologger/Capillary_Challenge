var mongoose = require('mongoose'),
    async = require('./async');
require('../../config/mongodb').db;
var Game = require("../models/GameData");
var Converter = require("csvtojson").Converter;

var converter = new Converter({});
var GameData = [];
converter.fromFile("./excel_data/gamesc2b2088.csv", function(err, result) {

    if (err) {
        console.log(err);
        return;
    }


    GameData = result;





    function addData(callback1) {
        async.series([
            function(callback2) {
                Game.create(GameData, function(err) {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    console.log('Game Data saved');
                    callback2(null, 'GameData');
                });
            }
        ], function(err, results) {
            if (err) {
                console.log(err);
                return;
            }
            console.log('All added');
            console.log(results);
            callback1(null, 'Added')
        });
    }


    async.series([addData], function(err, results) {
        if (err) {
            console.log(err);
            return;
        }
        console.log('Done');
        console.log(results);
        process.exit();
    });



});
