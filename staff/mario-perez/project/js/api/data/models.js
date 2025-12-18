import mongoose, { Schema, model, Types } from 'mongoose'

// const ObjectId = Types.ObjectId
const { ObjectId } = Types

const user = new Schema({
    name: {
        type: String,
        required: true,
        minLength: 1
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
})
const parking = new Schema({
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

    price: { // céntimos / min
        type: Number,
        required: true,
    },

    capacity: {
        type: Number,
        required: true
    }
})

const place = new Schema({
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

    vehicleRegistration: { // matrícula coche
        type: String,
        required: true,
        unique: true
    }
})

const vehicle = new Schema({
    user: {
        type: ObjectId,
        ref: 'User'
    },

    registration: { // matrícula coche
        type: String,
        required: true,
        unique: true
    }
})

const User = model('User', user)
const Parking = model('Parking', parking)
const Place = model('Place', place)
const Vehicle = model('Vehicle', vehicle)

export {
    User,
    Parking,
    Place,
    Vehicle
}