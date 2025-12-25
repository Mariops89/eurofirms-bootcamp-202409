import mongoose from "mongoose"

import { getOnePlace } from "./getOnePlace"

mongoose.connect("mongodb://localhost:27017/test-ts")
    .then(() => {
        console.info("TEST getOnePlace")
        console.info("CASE success on existing user")

        {
            try {
                return getOnePlace("68410e9266b5ed87be543190", "68410e9266b5ed87be543191")
                    .then(places => {
                        console.log("posts", places)
                    })
                    .catch(error => console.error(error))
            } catch (error) {
                console.error(error)
            }
        }
    })
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())