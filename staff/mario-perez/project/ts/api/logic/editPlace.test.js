import mongoose from 'mongoose'
import editPlace from './editPlace.js'

mongoose.connect('mongodb://127.0.0.1:27017/project')
    .then(() => {
        try {
            return editPlace('67842bbe1d15249790c8a557', '679003174c8160a3c2b6ac26', '67842bbe1d15249790c8a559', 2, '2H', '2024-12-20T10:00:00.000Z', '2024-12-20T10:40:00.000Z', '3511-HUB')
                .then(() => console.log(' plaza editada'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .then(() => console.log('the end'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())