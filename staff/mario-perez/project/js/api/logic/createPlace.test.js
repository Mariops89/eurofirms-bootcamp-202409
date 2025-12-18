import mongoose from 'mongoose'
import createPlace from './createPlace.js'

mongoose.connect('mongodb://127.0.0.1:27017/project')
    .then(() => {
        try {
            return createPlace('67842bbe1d15249790c8a557', '67842bbe1d15249790c8a559', 2, '2H', '2024-12-20T17:00:00.000Z', '2024-12-20T17:10:00.000Z', '3565-HUB')
                .then(() => console.log(' plaza registrada'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .then(() => console.log('the end'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())