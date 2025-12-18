import { Vehicle, User } from "../data/models"
import { validate, errors } from 'com'
import { CreateVehicleRegistration } from "./types"
const { SystemError, DuplicityError, NotFoundError, ValidationError } = errors


export const createVehicleRegistration: CreateVehicleRegistration = (userId, registration) => {
    validate.id(userId)
    validate.vehicleRegistration(registration)

    return Promise.all([
        User.findById(userId).lean(),
        Vehicle.find({ user: userId }).lean()
    ])
        .then(([user, registrations]) => {
            if (!user) throw new NotFoundError('No existe el usuario')

            registrations.forEach(reg => {
                if (reg.registration === registration) {
                    console.log(registration)
                    throw new DuplicityError('La matrícula ya existe')
                }
            })

            return Vehicle.create({ user: userId, registration })
        })
        .then(() => { })
        .catch(error => {
            if (error.code === 11000) {
                throw new DuplicityError('El vehículo ya existe')
            }
            throw new SystemError(error.message)
        });
}