import { Vehicle, User } from "../data/models.js"
import { validate, errors } from "com"
const { SystemError, DuplicityError, NotFoundError, ValidationError } = errors

function createVehicleRegistration(userId, registration) {
    validate.userId(userId)
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
        .catch(error => {
            if (error.code === 11000) {
                throw new DuplicityError('El vehículo ya existe')
            }
            throw new SystemError(error.message)
        });
}

export default createVehicleRegistration
