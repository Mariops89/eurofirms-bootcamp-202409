import mongoose from 'mongoose'
import { deletePlace } from './deletePlace.ts'

mongoose.connect('mongodb://127.0.0.1:27017/project')
    .then(() => {
        console.info("TEST deletePlace")

        console.info("CASE success on existing place")
        {
            try {
                return deletePlace('6765b5fc4016723ae53e9ebe', '676fc53842b3b5df437b61e2')
                    .then(result => {
                        console.assert(result === undefined, "result is undefined")

                        console.log('place deleted')
                    })
                    .catch(error => console.error(error))
            } catch (error) {
                console.error(error)
            }
        }
    })
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())