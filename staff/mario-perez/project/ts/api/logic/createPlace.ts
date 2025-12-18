import { ObjectId } from "mongoose"
import { CreatePlace } from "./types"
import { validate, errors } from 'com'
import { Place } from "../data/models"

const { SystemError, TimeError, DuplicityError } = errors

export const createPlace: CreatePlace = (parking, level, space, checkin, checkout, user, vehicleRegistration) => {
    validate.objectId(parking.toString(), "parking")
    validate.level(level)
    validate.space(space)
    validate.checkin(checkin)
    validate.checkout(checkout)
    validate.objectId(user.toString(), "user")
    validate.vehicleRegistration(vehicleRegistration)

    return Place.find({ parking: parking, level, space }).lean() // Vemos si hay plazas que tienen los mismos datos
        .catch(error => { throw new SystemError(error.message) })
        .then(places => {
            const checkinObjMils = new Date(checkin).getTime()
            const checkoutObjMils = new Date(checkout).getTime()

            places.forEach(place => {
                if (place.checkin.getTime() <= checkinObjMils && place.checkout.getTime() >= checkinObjMils)
                    throw new TimeError('El checkin se está intentando realizar en un tramo de tiempo ocupado')
                else if (place.checkin.getTime() <= checkoutObjMils && place.checkout.getTime() >= checkoutObjMils)
                    throw new TimeError('El checkout se está intentando realizar en un tramo de tiempo ocupado')
                else if (place.checkin.getTime() > checkinObjMils && place.checkout.getTime() < checkoutObjMils)
                    throw new TimeError('El periodo reservado ya contiene otra reserva')
            })

            return Place.create({ parking: parking, level, space, checkin, checkout, vehicleRegistration })
                .catch(error => {
                    if (error.code === 11000) throw new DuplicityError('La plaza no puede crearse')

                    throw new SystemError(error.message)
                })
        })


}

// export default createPlace