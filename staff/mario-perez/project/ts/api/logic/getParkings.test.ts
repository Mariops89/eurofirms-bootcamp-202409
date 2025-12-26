import mongoose from 'mongoose'
import { getParkings } from './getParkings.ts'

mongoose.connect('mongodb://127.0.0.1:27017/project-ts')
    .then(() => {
        try {
            return getParkings()
                .then((parking => console.log(parking)))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())