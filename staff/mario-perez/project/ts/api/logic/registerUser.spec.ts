import mongoose from "mongoose"
import { registerUser } from "./registerUser.ts"
import { expect } from "chai"
import { UserDocType, User } from "../data/models.ts"
import { DuplicityError, SystemError } from "com/errors"

describe("logic - register user", () => {
    before(() => mongoose.connect("mongodb://127.0.0.1:27017/project-ts"))

    beforeEach(() => User.deleteMany())

    it("registers on new user", () => {
        let value: void, user: UserDocType | null

        return registerUser("Lourdes", "lourdes@unizar.com", "lourdes", "123123123")
            .then(_value => value = _value)
            .then(() => User.findOne().lean())
            .then(_user => user = _user)
            .finally(() => {
                expect(value).to.be.undefined
                expect(user).to.exist
                expect(user?.name).to.equal("Lourdes")
                expect(user?.email).to.equal("lourdes@unizar.com")
                expect(user?.username).to.equal("lourdes")
                expect(user?.password).to.equal("123123123")
            })
    })

    it("fails trying to register a user that already exists", () => {
        let error: Error
        return User.create({
            name: "Lourdes",
            email: "lourdes@unizar.com",
            username: "lourdes",
            password: "123123123"
        })
            .then(() => registerUser("Lourdes", "lourdes@unizar.com", "lourdes", "123123123"))
            .catch(_error => error = _error)
            .finally(() => {
                expect(error).to.be.instanceOf(DuplicityError)
                expect(error.message).to.equal("user already exists")
            })
    })
    afterEach(() => User.deleteMany({}))

    after(() => mongoose.disconnect())
})