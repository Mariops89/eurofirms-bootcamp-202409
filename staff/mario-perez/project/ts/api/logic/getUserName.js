import { User } from '../data/models.js'
import { validate, errors } from 'com'

const { SystemError, NotFoundError } = errors

function getUserName(userId, targetUserId) {
    debugger
    validate.userId(userId)
    validate.userId(targetUserId)

    return Promise.all([
        User.findById(userId).lean(),
        User.findById(targetUserId).lean()
    ])
        .catch(error => { throw new SystemError(error.message) })
        .then(users => {
            const [user, targetUser] = users

            if (!user) throw new NotFoundError('usuario no encontrado')
            if (!targetUser) throw new NotFoundError('El usuario que pides no existe')

            return targetUser.name
        })
}

export default getUserName