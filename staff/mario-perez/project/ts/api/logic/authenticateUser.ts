import { AuthenticateUser } from "./types"
import { User } from '../data/models'
import { validate, errors } from 'com'

const { SystemError, CredentialsError, NotFoundError } = errors


export const authenticateUser: AuthenticateUser = (username, password) => {

    validate.username(username)
    validate.password(password)

    return User.findOne({ username })
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) throw new NotFoundError('user not found')

            if (user.password !== password) throw new CredentialsError('wrong credentials')

            return user._id.toString()
        })

}