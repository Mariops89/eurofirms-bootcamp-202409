import mongoose from "mongoose"

import { createVehicleRegistration } from "./createVehicleRegistration"

mongoose.connect("mongodb://localhost:27017/project-ts")
    .then(() => {
        console.info("TEST createVehicleRegistration")

        console.info("CASE success on existing user")

        {
            try {
                return createVehicleRegistration("68410e9266b5ed87be543190", "ABC-123")
                    .then(result => {
                        console.assert(result === undefined, "result is undefined")
                        console.log("vehículo creado")
                    })
                    .catch(error => console.error(error))
            } catch (error) {
                console.error(error)
            }
        }
    })
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())