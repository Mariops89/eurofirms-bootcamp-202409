import { expect } from "chai"
import mongoose, { Types } from "mongoose"
import { Place, User } from "../data/models"
import { getOnePlace } from "./getOnePlace"
import { NotFoundError } from "com/errors"
import { PlaceType } from "./types"

describe("getOnePlace", () => {
    before(() => mongoose.connect(process.env.MONGODB_URL_TEST!))

    beforeEach(() => Promise.all([
        User.deleteMany({}),
        Place.deleteMany({})
    ]))

    it("succeeds getting an existing place", () => {
        let placeId: string
        let place: PlaceType

        return User.create({
            name: "Pepi Nillo",
            email: "pepi@nillo.com",
            username: "pepinillo",
            password: "123123123"
        })
            .then(user =>
                Place.create({
                    parking: new mongoose.Types.ObjectId(),
                    level: 1,
                    space: "A1",
                    checkin: new Date(),
                    checkout: new Date(),
                    user: user._id,
                    vehicleRegistration: "ABC-123",
                    free: false
                })
            )
            .then(createdPlace => {
                placeId = createdPlace.id
                return getOnePlace(createdPlace.user.toString(), createdPlace.id)
            })
            .then(_place => place = _place)
            .finally(() => {
                expect(place.id).to.equal(placeId)
            })
    })

    it("fails trying to get a place that does not exist", () => {
        let error: Error

        const fakeUserId = new mongoose.Types.ObjectId().toString()
        const fakePlaceId = new mongoose.Types.ObjectId().toString()

        return getOnePlace(fakeUserId, fakePlaceId)
            .catch(_error => error = _error)
            .finally(() => {
                expect(error).to.be.instanceOf(NotFoundError)
                expect(error.message).to.equal("No existe la plaza")
            })
    })

    afterEach(() => Promise.all([
        User.deleteMany({}),
        Place.deleteMany({})
    ]))

    after(() => mongoose.disconnect())
})