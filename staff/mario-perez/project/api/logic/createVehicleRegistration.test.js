import mongoose from 'mongoose'
import createVehicleRegistration from './createVehicleRegistration.js'

mongoose.connect('mongodb://127.0.0.1:27017/project')
    .then(() => {
        try {
            return createVehicleRegistration('67f8201d59aa1ed84ecb9bd6', '4444-PPP')
                .then(() => console.log('coche registrado'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .then(() => console.log('the end'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())

