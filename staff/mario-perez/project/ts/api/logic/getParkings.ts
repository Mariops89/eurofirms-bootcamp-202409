import { Parking } from '../data/models'
import { validate, errors } from 'com'
import { GetParkings, ParkingType } from './types'


const { SystemError, NotFoundError } = errors

export const getParkings: GetParkings = () => {
    return Parking.find().select('-__v').lean()
        .then(docs => {
            const parkings: ParkingType[] = docs.map(doc => ({
                id: doc._id.toString(),
                name: doc.name,
                address: doc.address,
                city: doc.city,
                levels: doc.levels,
                price: doc.price,
                capacity: doc.capacity
            }))

            return parkings
        })

}