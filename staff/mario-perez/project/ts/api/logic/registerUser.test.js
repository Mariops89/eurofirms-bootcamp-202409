import mongoose from 'mongoose'
import registerUser from './registerUser.js'

mongoose.connect('mongodb://127.0.0.1:27017/project')
    .then(() => {
        try {
            return registerUser('Lourdes', 'lourdes@unizar.com', 'lourdes', '123123123')
                .then(() => console.log('usuario registrado'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .then(() => console.log('the end'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())