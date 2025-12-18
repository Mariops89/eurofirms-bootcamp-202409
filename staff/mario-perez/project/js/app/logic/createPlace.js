import { validate, errors } from 'com'

const { SystemError } = errors

function createPlace(parkingId, level, space, checkin, checkout, vehicleRegistration) {
    validate.level(level)
    validate.space(space)
    validate.checkinAndCheckout(checkin, checkout)
    validate.vehicleRegistration(vehicleRegistration)

    return fetch(`${import.meta.env.VITE_API_URL}/places`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${sessionStorage.token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ parkingId, level, space, checkin, checkout, vehicleRegistration })
    })
        .catch(error => { throw new SystemError(error.message) })
        .then(response => {
            const status = response.status

            if (status === 201) return

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

export default createPlace