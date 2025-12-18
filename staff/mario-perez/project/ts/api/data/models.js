"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Place = exports.Parking = exports.User = void 0;
var mongoose_1 = require("mongoose");
// const ObjectId = Types.ObjectId
var ObjectId = mongoose_1.Schema.Types.ObjectId;
var user = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        minLenth: 1
    },
    email: {
        type: String,
        required: true,
        minLength: 6,
        unique: true
    },
    username: {
        type: String,
        required: true,
        minLength: 4,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    }
});
var parking = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        minLength: 1,
        unique: true
    },
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    levels: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    capacity: {
        type: Number,
        required: true
    }
});
var place = new mongoose_1.Schema({
    parking: {
        type: ObjectId,
        ref: 'Parking',
        required: true
    },
    level: {
        type: Number,
        required: true
    },
    space: {
        type: String,
        required: true
    },
    checkin: {
        type: Date,
        //default: Date.now,
        //get: (date) => date.toLocaleDateString("es-ES"), // getter
        required: true
    },
    checkout: {
        type: Date,
        //default: Date.now,
        //get: (date) => date.toLocaleDateString("es-ES"), // getter
        required: true
    },
    //location: {
    //    type: ?,
    //    required: true
    //},
    user: {
        type: ObjectId,
        ref: 'User'
    },
    vehicleRegistration: {
        type: String,
        required: true,
        unique: true
    }
});
var User = (0, mongoose_1.model)('User', user);
exports.User = User;
var Parking = (0, mongoose_1.model)('Parking', parking);
exports.Parking = Parking;
var Place = (0, mongoose_1.model)('Place', place);
exports.Place = Place;
