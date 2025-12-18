import mongoose from 'mongoose'
import registerUser from './registerUser.js'

mongoose.connect('mongodb://127.0.0.1:27017/project-ts')
    .then(() => {
        console.info("TEST registerUser")

        console.info("CASE succeeds on new user")
        try {
            return registerUser('Lourdes', 'lourdes@unizar.com', 'lourdes', '123123123')
                .then(result => {
                    console.assert(result === undefined, "result is undefined")

                    console.log("user saved")
                })
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .then(() => console.log('the end'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())