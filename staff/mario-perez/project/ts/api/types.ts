import { ObjectId } from "mongoose"

type User = {
    name: String,
    email: String,
    username: String,
    password: String
}

type Parking = {
    name: String,
    address: String,
    city: String,
    levels: Number,
    price: Number,
    capacity: Number
}

type Place = {
    parking: ObjectId,
    level: Number,
    space: String,
    checkin: Date,
    checkout: Date,
    user: ObjectId,
    vehicleRegistration: String
}

type Vehicle = {
    user: ObjectId,
    registration: String
}

type Logic = {
    authenticateUser(username: string, password: string): Promise<string>
    //    createPlace(userId: ObjectId, parkingId: ObjectId, level: number, space: string, checkin: Date, checkout: Date, vehicleRegistration: string)
    //    deletePlace(userId: ObjectId, placeId: ObjectId)
    //    editPlace(userId: ObjectId, placeId: ObjectId, parkingId: ObjectId, level: Number, space: string, checkin: Date, checkout: Date, vehicleRegistration: string)
    //    getOnePlace(userId: ObjectId, placeId: ObjectId)
    //    getParkings()
    //    getUserName(userId: ObjectId, targetUserId: ObjectId)
    //    getUserPlaces(userId: ObjectId)
    registerUser(name: string, email: string, username: string, password: string): void
}

export {
    User,
    Parking,
    Place,
    Vehicle,
    Logic
}