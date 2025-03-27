import { Schema, model, Types, ObjectId } from "mongoose"

// const ObjectId = Types.ObjectId
const { ObjectId } = Schema.Types

interface IUser {
    name: string
    email: string
    username: string
    password: string
}

interface IParking {
    name: String
    address: String
    city: String
    levels: Number
    price: Number
    capacity: Number
}

interface IPlace {
    parking: Types.ObjectId
    level: Number
    space: String
    checkin: Date
    checkout: Date
    user: Types.ObjectId
    vehicleRegistration: String
    free: boolean
}

const user = new Schema<IUser>({
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
})
const parking = new Schema<IParking>({
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

const place = new Schema<IPlace>({
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
const User = model<IUser>('User', user)
const Parking = model<IParking>('Parking', parking)
const Place = model<IPlace>('Place', place)

export {
    IUser,
    IParking,
    IPlace,
    User,
    Parking,
    Place
}