import { validate, errors } from "com"

const { SystemError } = errors

function editPlace(placeId, parkingId, level, space, checkin, checkout, vehicleRegistration) {
    validate.placeId(placeId)
    validate.parkingId(parkingId)
    validate.level(level)
    validate.space(space)
    validate.checkinAndCheckout(checkin, checkout)
    validate.vehicleRegistration(vehicleRegistration)

    return fetch(`${import.meta.env.VITE_API_URL}/places/${placeId}`, {
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${sessionStorage.token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ parkingId, placeId, level, space, checkin, checkout, vehicleRegistration })
    })
        .catch(error => { throw new SystemError(error.message) })
        .then(response => {
            const status = response.status

            if (status === 204) return

            return response.json()
                .catch(error => { throw new SystemError(error.message) })
                .then(body => {
                    const error = body.error
                    const message = body.message

                    const constructor = errors[error]

                    throw new constructor(message)
                })
        })
}

export default editPlace