import { Schema, model, Types, ObjectId } from "mongoose"

// const ObjectId = Types.ObjectId
const { ObjectId } = Schema.Types

type UserDocType = {
    _id: Types.ObjectId
    name: string
    email: string
    username: string
    password: string
    __v: number
}

type VehicleDocType = {
    _id: Types.ObjectId
    user: Types.ObjectId
    registration: string
    __v: number
}

type ParkingDocType = {
    _id: Types.ObjectId
    name: string
    address: string
    city: string
    levels: number
    price: number
    capacity: number
    __v: number
}

type PlaceDocType = {
    _id: Types.ObjectId
    parking: Types.ObjectId
    level: number
    space: string
    checkin: Date
    checkout: Date
    user: Types.ObjectId
    vehicleRegistration: string
    free: boolean
    __v: number
}

const user = new Schema<UserDocType>({
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
const parking = new Schema<ParkingDocType>({
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

const place = new Schema<PlaceDocType>({
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

const vehicle = new Schema<VehicleDocType>({
    user: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    registration: {
        type: String,
        required: true,
        unique: true
    }
})

const User = model<UserDocType>('User', user)
const Parking = model<ParkingDocType>('Parking', parking)
const Place = model<PlaceDocType>('Place', place)
const Vehicle = model<VehicleDocType>('Vehicle', vehicle)

export {
    UserDocType,
    VehicleDocType,
    ParkingDocType,
    PlaceDocType,

    User,
    Parking,
    Place,
    Vehicle
}