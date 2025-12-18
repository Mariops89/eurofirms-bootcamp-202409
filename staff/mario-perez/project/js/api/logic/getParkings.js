import { Parking } from '../data/models.js'
import { errors } from 'com'


const { SystemError, NotFoundError } = errors

function getParkings() {
    return Parking.find().select('-__v').lean()
        .then(parkings => {
            parkings.forEach(element => {
                element.id = element._id.toString()
                delete element._id
            });

            return parkings
        })

}

export default getParkings