import mongoose from "mongoose"

import { createPlace } from "./createPlace"

mongoose.connect("mongodb://localhost:27017/project-ts")
    .then(() => {
        console.info("TEST createPlace")

        console.info("CASE success on existing user")

        {
            try {
                return createPlace("68410e9266b5ed87be543190", 1, "A1", new Date(), new Date(), "68410e9266b5ed87be543190", "ABC-123")
                    .then(result => {
                        console.assert(result === undefined, "result is undefined")
                        console.log("plaza creada")
                    })
                    .catch(error => console.error(error))
            } catch (error) {
                console.error(error)
            }
        }
    })
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())