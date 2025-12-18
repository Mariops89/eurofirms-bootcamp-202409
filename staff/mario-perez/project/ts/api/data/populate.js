"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var models_1 = require("./models");
mongoose_1.default.connect('mongodb://127.0.0.1:27017/project-ts')
    .then(function () { return models_1.User.deleteMany(); })
    .then(function () { return models_1.Parking.deleteMany(); })
    .then(function () { return models_1.Place.deleteMany(); })
    .then(function () {
    // users 
    var pepito = new models_1.User({
        name: 'Pepito Grillo',
        email: 'pepito@grillo.com',
        username: 'pepitogrillo',
        password: '123123123'
    });
    var campa = new models_1.User({
        name: 'Campa Nilla',
        email: 'campa@nilla.com',
        username: 'campanilla',
        password: '123123123'
    });
    var peter = new models_1.User({
        name: 'Peter Pan',
        email: 'peter@pan.com',
        username: 'peterpan',
        password: '123123123'
    });
    var wendy = new models_1.User({
        name: 'Wendy Darling',
        email: 'wendy@darling.com',
        username: 'wendydarling',
        password: '123123123'
    });
    // parkings
    var augusta = new models_1.Parking({
        name: 'Parking Augusta',
        address: 'Avda de Navarra, s/n',
        city: 'Zaragoza',
        levels: 2,
        price: 0,
        capacity: 3600
    });
    var grancasa = new models_1.Parking({
        name: 'Parking Grancasa',
        address: 'Calle Maria Zambrano, 35',
        city: 'Zaragoza',
        levels: 3,
        price: 100,
        capacity: 4800
    });
    var salamero = new models_1.Parking({
        name: 'Parking Indigo Salamero',
        address: 'Plaza de Miguel Salamero, s/n',
        city: 'Zaragoza',
        levels: 2,
        price: 210,
        capacity: 3600
    });
    var elcarmen = new models_1.Parking({
        name: 'Parking Indigo - El Carmen',
        address: 'Calle del Marqués de Casa Jiménez, s/n',
        city: 'Zaragoza',
        levels: 2,
        price: 105,
        capacity: 3600
    });
    // places
    var place1 = new models_1.Place({
        parking: grancasa._id,
        level: 2,
        space: '2A',
        checkin: new Date('2024-12-16T09:00:00Z'),
        checkout: new Date('2024-12-16T17:00:00Z'),
        free: false,
        user: pepito._id,
        vehicleRegistration: '1234-ABC'
        //location:
    });
    var place2 = new models_1.Place({
        parking: grancasa._id,
        level: 2,
        space: '2G',
        checkin: new Date('2024-12-15T08:00:00Z'),
        checkout: new Date('2024-12-15T18:00:00Z'),
        free: true,
        user: peter._id,
        vehicleRegistration: '4567-DEF'
        //location:
    });
    return Promise.all([
        pepito.save(),
        campa.save(),
        peter.save(),
        wendy.save(),
        augusta.save(),
        grancasa.save(),
        salamero.save(),
        elcarmen.save(),
        place1.save(),
        place2.save()
    ]);
})
    .then(function (items) {
    var pepito = items[0], campa = items[1], peter = items[2], wendy = items[3], augusta = items[4], grancasa = items[5], salamero = items[6], elcarmen = items[7], place1 = items[8], place2 = items[9];
    console.log(items);
})
    .then(function () { return console.log('populated'); })
    .catch(function (error) { return console.error(error); })
    .finally(function () { return mongoose_1.default.disconnect(); });
