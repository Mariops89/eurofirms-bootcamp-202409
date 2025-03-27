import mongoose from 'mongoose'
import getUserPlaces from './getUserPlaces.js'

mongoose.connect('mongodb://127.0.0.1:27017/project')
    .then(() => {
        try {
            return getUserPlaces('6765b5fc4016723ae53e9ebf')
                .then(name => console.log(name))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .then(() => console.log('the end'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())
