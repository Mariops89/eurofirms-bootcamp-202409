import mongoose from 'mongoose'
import deletePlace from './deletePlace.js'

mongoose.connect('mongodb://127.0.0.1:27017/project')
    .then(() => {
        try {
            return deletePlace('6765b5fc4016723ae53e9ebe', '676fc53842b3b5df437b61e2')
                .then(() => console.log('place deleted'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .then(() => console.log('the end'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())