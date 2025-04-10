import { User, Place } from '../data/models.js'
import { validate, errors } from 'com'

const { SystemError, NotFoundError } = errors

function getUserVehicleRegistrations(userId) {
    validate.userId(userId)

    return Promise.all([
        User.findById(userId).lean(),
        Place.find({ user: userId }, '-user -__v').populate('vehicleRegistration').lean()
    ])
        .catch(error => { throw new SystemError(error.message) })
        .then(userAndPlaces => {
            const [user, places] = userAndPlaces

            if (!user) throw new NotFoundError('No existe el usuario')

            const vehicleRegistrationList = places.map(place => place.vehicleRegistration)

            return vehicleRegistrationList
        })
}

export default getUserVehicleRegistrations