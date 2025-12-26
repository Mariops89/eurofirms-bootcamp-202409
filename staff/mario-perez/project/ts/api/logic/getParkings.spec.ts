import { expect } from "chai"
import mongoose, { Types } from "mongoose"
import { Parking } from "../data/models"
import { getParkings } from "./getParkings"
import { SystemError, NotFoundError } from "com/errors"
import { ParkingType } from "./types"

const { ObjectId } = Types

describe("getParkings", () => {
    before(() => mongoose.connect(process.env.MONGODB_URL_TEST!))

    beforeEach(() => Parking.deleteMany({}))

    it("succeeds getting an existing parking", () => {
        let parkingId: string, parking: ParkingType
        return Parking.create({ name: "Parking A", address: "Calle Mayor", city: "Madrid", levels: 3, price: 10, capacity: 100 })
            .then(parking => {
                parkingId = parking.id

                return getParkings()
            })
            .then(_parkings => parking = _parkings[0])
            .finally(() => {
                expect(parking.id).to.equal(parkingId)
                expect(parking.name).to.equal("Parking A")
                expect(parking.address).to.equal("Calle Mayor")
                expect(parking.city).to.equal("Madrid")
                expect(parking.levels).to.equal(3)
                expect(parking.price).to.equal(10)
                expect(parking.capacity).to.equal(100)
            })
    })

    it("succeeds returning an empty array when no parkings exist", () => {
        return getParkings()
            .then(parkings => {
                expect(parkings).to.be.an("array").that.is.empty
            })
    })

    afterEach(() => Parking.deleteMany({}))

    after(() => mongoose.disconnect())
})