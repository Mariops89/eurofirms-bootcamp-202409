import { errors, validate } from 'com'
import { Place, User } from '../data/models.js'

const { SystemError, NotFoundError, DuplicityError, OwnerShipError } = errors

function editPlace(userId, placeId, parkingId, level, space, checkin, checkout, vehicleRegistration) {
    validate.userId(userId)
    validate.placeId(placeId)
    validate.parkingId(parkingId)
    validate.space(space)
    validate.level(level)
    validate.checkinAndCheckout(checkin, checkout)
    validate.vehicleRegistration(vehicleRegistration)

    const checkinObjMils = new Date(checkin).getTime()
    const checkoutObjMils = new Date(checkout).getTime()

    return Promise.all([
        User.findById(userId).select('-__v _id').lean(),
        Place.findById(placeId).lean()
    ])
        .catch(error => { throw new SystemError(error.message) })
        .then(userAndPlace => {
            const [user, place] = userAndPlace
            if (!user) throw new NotFoundError('El dueño debe estar registrado')
            if (!place) throw new NotFoundError('La plaza no existe')
            //comprobamos el dueño
            if (place.user._id.toString() !== userId) throw new OwnerShipError('El usuario registrado no es el dueño')
            //comprobar si los datos son iguales
            if (place.parking._id.toString() === parkingId && place.level === level && place.space === space && place.checkin === checkinObjMils && place.checkout.getTime() === checkoutObjMils)
                throw new DuplicityError('La plaza ya está ocupada')

            return Place.find({ parking: parkingId, level: level, space: space, _id: { $not: { $eq: placeId } } })
                .catch(error => { throw new SystemError(error.message) })
                .then(placesFound => {

                    placesFound.forEach(place => {
                        console.log(placesFound)
                        if (place.checkin.getTime() <= checkinObjMils && place.checkout.getTime() >= checkinObjMils)
                            throw new Error('El checkin se está intentando realizar en un tramo de tiempo ocupado')
                        if (place.checkin.getTime() <= checkoutObjMils && place.checkout.getTime() >= checkoutObjMils)
                            throw new Error('El checkout se está intentando realizar en un tramo de tiempo ocupado')
                        if (place.checkin.getTime() > checkinObjMils && place.checkout.getTime() < checkoutObjMils)
                            throw new Error('El periodo reservado ya contiene otra reserva')
                    })



                    return Place.updateOne({ _id: placeId }, { parking: parkingId, level: level, space: space, checkin: checkin, checkout: checkout, user: userId, vehicleRegistration: vehicleRegistration })
                        .catch(error => {
                            throw new SystemError(error.message)
                        })
                        .then(() => { })
                })
        })
}

export default editPlace