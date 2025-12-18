import { User, Place } from '../data/models.js'
import { validate, errors } from 'com'

const { SystemError, NotFoundError } = errors

function getOnePlace(userId, placeId) {
    validate.userId(userId)
    validate.placeId(placeId)

    return Promise.all([
        User.findById(userId).lean(),
        Place.findById(placeId).lean()
    ])
        .catch(error => { throw new SystemError(error.message) })
        .then(userAndPlace => {
            const [user, place] = userAndPlace

            if (!user) throw new NotFoundError('No existe el usuario')
            if (!place) throw new NotFoundError('No existe la plaza')

            delete place.__v

            place.id = place._id.toString()
            delete place._id

            place.parking = place.parking.toString()
            place.user = place.user.toString()

            return place
        })
}

export default getOnePlace