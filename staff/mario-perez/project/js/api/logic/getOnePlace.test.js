import mongoose from 'mongoose'
import getOnePlace from './getOnePlace.js'

mongoose.connect('mongodb://127.0.0.1:27017/project')
    .then(() => {
        try {
            return getOnePlace('67842bbe1d15249790c8a555', '67842bbe1d15249790c8a55d')
                .then(place => console.log(place))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .then(() => console.log('the end'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())
