import mongoose from 'mongoose'
import getUserVehicleRegistrations from './getUserVehicleRegistrations.js'

mongoose.connect('mongodb://127.0.0.1:27017/project')
    .then(() => {
        try {
            return getUserVehicleRegistrations('67842bbe1d15249790c8a557')
                .then(vehicleRegistrations => console.log('El usuario tiene coches con las siguientes matrículas: ' + vehicleRegistrations))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .then(() => console.log('the end'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())