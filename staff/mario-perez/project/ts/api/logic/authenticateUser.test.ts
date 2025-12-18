import mongoose from 'mongoose'
import { authenticateUser } from './authenticateUser'

mongoose.connect('mongodb://127.0.0.1:27017/project-ts') //TODO connect with env variable
    .then(() => {
        console.info("TEST authenticateUser")

        console.info("CASE succeeds on existing user")

        try {
            return authenticateUser('pepitogrillo', '123123123')
                .then((userId: string) => {
                    console.log("user authenticated:", userId)
                })
                .catch((error: Error) => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .then(() => console.log('the end'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())

