import { ObjectId } from "mongoose"

type UserType = {
    id: string
    name: string
    email: string
    username: string
}

type PlaceType = {
    id: string
    parking: string
    level: number
    space: string
    checkin: Date
    checkout: Date
    vehicleRegistration: string
}

type AuthenticateUser = (username: string, password: string) => Promise<string>

type RegisterUser = (name: string, email: string, username: string, password: string) => Promise<void>

type CreatePlace = (parking: string, level: number, space: string, checkin: Date, checkout: Date, user: string, vehicleRegistration: string) => Promise<void>

type CreateVehicleRegistration = (userId: string, registration: string) => Promise<void>

type DeletePlace = (placeId: string, userId: string) => Promise<void>

type GetOnePlace = (userId: string, placeId: string) => Promise<PlaceType>

type Logic = {
    authenticateUser: AuthenticateUser
    registerUser: RegisterUser
    createPlace: CreatePlace
    createVehicleRegistration: CreateVehicleRegistration
    deletePlace: DeletePlace
    getOnePlace: GetOnePlace
}

export {
    AuthenticateUser,
    RegisterUser,
    CreatePlace,
    CreateVehicleRegistration,
    DeletePlace,
    GetOnePlace,
    PlaceType, Logic
}