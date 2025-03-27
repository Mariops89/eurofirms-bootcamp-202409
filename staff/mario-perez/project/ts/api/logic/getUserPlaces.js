import { User, Place } from '../data/models.js'
import { validate, errors } from 'com'

const { SystemError, NotFoundError } = errors

function getUserPlaces(userId) {
    validate.userId(userId)

    return Promise.all([
        User.findById(userId).lean(),
        Place.find({ user: userId }, '-user -__v').populate('parking', 'name').lean()
    ])
        .catch(error => { throw new SystemError(error.message) })
        .then(userAndPlaces => {
            const [user, places] = userAndPlaces

            if (!user) throw new NotFoundError('No existe el usuario')

            places.forEach((place) => {
                place.id = place._id.toString()
                delete place._id

                if (place.parking._id) {
                    place.parking.id = place.parking._id.toString()
                    delete place.parking._id
                }
            })

            return places
        })
}

export default getUserPlaces