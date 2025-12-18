import mongoose, { mongo } from "mongoose"
import { expect } from "chai"
import { User, UserDocType } from "../data/models"
import { authenticateUser } from "./authenticateUser"
import { NotFoundError, CredentialsError, SystemError } from "com/errors"

describe("authenticateUser", () => {
    before(() => mongoose.connect('mongodb://127.0.0.1:27017/project-ts')) //TODO connect with env variable

    beforeEach(() => User.deleteMany({}))

    it("authenticates an existing user", () => {
        let user: UserDocType, userId: string

        return User.create({
            name: "James Hook",
            email: "james@hook.com",
            username: "jameshook",
            password: "123123123"
        })
            .then(_user => user = _user)
            .then(() => authenticateUser("jameshook", "123123123"))
            .then(_userId => userId = _userId)
            .finally(() => {
                expect(userId).to.be.string
                expect(userId).to.equal(user._id.toString())
            })
    })

    // TODO unhappies

    it("fails on non-existing user", () => {
        let error: Error

        return authenticateUser("campanilla", "123123123")
            .catch((_error: Error) => error = _error)
            .finally(() => {
                expect(error).to.be.instanceOf(NotFoundError)
                expect(error.message).to.equal("user not found")
            })
    })

    it("fails on existing user but wrong password", () => {
        let error: Error

        return User.create({
            name: "James Hook",
            email: "james@hook.com",
            username: "jameshook",
            password: "123123123"
        })
            .then(() => authenticateUser("jameshook", "321321321"))
            .catch(_error => error = _error)
            .finally(() => {
                expect(error).to.be.instanceOf(CredentialsError)
                expect(error.message).to.equal("wrong credentials")
            })
    })

    after(() => mongoose.disconnect())
})