import { User, Place } from '../data/models.js'
import { validate, errors } from 'com'

const { SystemError, NotFoundError, OwnerShipError } = errors
function deletePlace(userId, placeId) {
    validate.userId(userId)
    validate.placeId(placeId)

    return Promise.all([
        User.findById(userId).lean(),
        Place.findById(placeId).lean()
    ])
        .catch(error => { throw new SystemError(error.message) })
        .then(UserAndPlace => {
            const [user, place] = UserAndPlace

            if (!user) throw new NotFoundError('usuario no encontrado')
            if (!place) throw new NotFoundError('plaza no registrada')

            if (place.user.toString() !== userId) throw new OwnerShipError('La plaza no es del usuario')

            return Place.deleteOne({ _id: place._id })
                .catch(error => { throw new SystemError(error.message) })
        })
        .then(_ => { })
}

export default deletePlace