import mongoose from 'mongoose'
import getUserPlaces from './getUserPlaces.js'

mongoose.connect('mongodb://127.0.0.1:27017/project')
    .then(() => {
        try {
            return getUserPlaces('679beb26642abb83c4fd5ef7')
                .then(places => console.log(places))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .then(() => console.log('the end'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())
