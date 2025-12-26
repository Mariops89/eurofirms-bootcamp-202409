import mongoose from "mongoose"
import { createVehicleRegistration } from "./createVehicleRegistration.ts"
import { expect } from "chai"
import { Vehicle, User, VehicleDocType } from "../data/models.ts"
import { DuplicityError, SystemError } from "com/errors"

describe("logic - create vehicle registration", () => {
    before(() => mongoose.connect("mongodb://127.0.0.1:27017/project-ts"))

    beforeEach(() => User.deleteMany())

    it("registers on new vehicle", () => {
        let value: void, vehicle: VehicleDocType | null

        return createVehicleRegistration("68410e9266b5ed87be543190", "ABC-123")
            .then(_value => value = _value)
            .then(() => Vehicle.findOne().lean())
            .then(_vehicle => vehicle = _vehicle)
            .finally(() => {
                expect(value).to.be.undefined
                expect(vehicle).to.exist
                expect(vehicle?.user.toString()).to.equal("68410e9266b5ed87be543190")
                expect(vehicle?.registration).to.equal("ABC-123")
            })
    })

    it("fails trying to register a vehicle that already exists", () => {
        let error: Error
        return Vehicle.create({
            user: "68410e9266b5ed87be543190",
            registration: "ABC-123"
        })
            .then(() => createVehicleRegistration("68410e9266b5ed87be543190", "ABC-123"))
            .catch(_error => error = _error)
            .finally(() => {
                expect(error).to.be.instanceOf(DuplicityError)
                expect(error.message).to.equal("vehicle already exists")
            })
    })
    afterEach(() => User.deleteMany({}))

    after(() => mongoose.disconnect())
})