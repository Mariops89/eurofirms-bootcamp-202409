import { GetOnePlace, PlaceType } from "./types"
import { User, Place } from '../data/models'
import { validate, errors } from 'com'

const { SystemError, NotFoundError } = errors

export const getOnePlace: GetOnePlace = (userId, placeId) => {
    validate.id(userId)
    validate.id(placeId)

    return Promise.all([
        User.findById(userId).lean(),
        Place.findById(placeId).lean()
    ])
        .catch(error => { throw new SystemError(error.message) })
        .then(userAndPlace => {
            const [user, place] = userAndPlace

            if (!user) throw new NotFoundError('No existe el usuario')
            if (!place) throw new NotFoundError('No existe la plaza')

            //delete place.__v

            //place.id = place._id.toString()
            //delete place._id

            const result: PlaceType = {
                id: place._id.toString(),
                parking: place.parking.toString(),
                level: place.level,
                space: place.space,
                checkin: place.checkin,
                checkout: place.checkout,
                vehicleRegistration: place.vehicleRegistration
            }

            return result
        })
}

//export default getOnePlace