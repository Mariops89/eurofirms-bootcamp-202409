import errors from './errors.js'

const { ValidationError, NotFoundError } = errors

const validate = {
    name(name) {
        if (!name || name === '') throw new ValidationError('Todos los campos deben contener algún valor')
        if (typeof name !== 'string') throw new ValidationError('El nombre no es válido')
        if (name.length < 2) throw new ValidationError('El nombre es demasiado corto')
    },
    email(email) {
        if (!email || email === '') throw new ValidationError('Todos los campos deben contener algún valor')
        if (typeof email !== 'string') throw new Error('El email no es válido')
        if (email.length < 6) throw new ValidationError('Email demasiado corto')

        if (!email.includes('@')) throw new Error('El email tiene que tener una @')
        if (!email.includes('.')) throw new Error('Email debe contener un punto')

        var indexOfAt = email.indexOf('@')
        var indexOfDot = email.indexOf('.')
        if (indexOfDot < indexOfAt) throw new Error('Email incorrecto')

    },

    username(username) {
        if (!username || username === '') throw new ValidationError('Todos los campos deben contener algún valor')
        if (typeof username !== 'string') throw new Error('Usuario no válido')
        if (username.length < 4) throw new Error('El nombre de usuario debe tener al menos 4 caracteres')
    },

    password(password) {
        if (!password || password === '') throw new ValidationError('Todos los campos deben contener algún valor')
        if (typeof password !== 'string') throw new Error('Contraseña no válida')
        if (password.length < 8) throw new Error('La contraseña debe tener por lo menos 8 caracteres')
    },

    userId(userId) {
        if (!userId || userId === '') throw new ValidationError('Todos los campos deben contener algún valor')
        if (typeof userId !== 'string') throw new ValidationError(' userId inválido')
        if (userId.length !== 24) throw new ValidationError("longitud del userId inválida")
    },

    level(level) {
        if (!level) throw new ValidationError('Todos los campos deben contener algún valor')
        if (typeof level !== 'number') throw new ValidationError(' Nivel inválido')
    },

    space(space) {
        if (!space || space === '') throw new ValidationError('Todos los campos deben contener algún valor')
        if (typeof space !== 'string') throw new ValidationError(' Plaza de parking inválida')
    },

    checkinAndCheckout(checkin, checkout) {
        if (!checkin || checkin === '') throw new ValidationError('Todos los campos deben contener algún valor')
        if (!checkout || checkout === '') throw new ValidationError('Todos los campos deben contener algún valor')
        if (typeof checkin !== 'string') throw new ValidationError(' checkin inválido')
        if (typeof checkout !== 'string') throw new ValidationError(' checkout inválido')
        if (checkin.length === 0) throw new ValidationError('No existe tiempo de llegada')
        if (checkout.length === 0) throw new ValidationError('No existe tiempo de salida')
        const dateCheckin = new Date(checkin)
        const dateCheckout = new Date(checkout)
        if (dateCheckout <= dateCheckin) throw new ValidationError('La hora de salida debe ser posterior a la hora de llegada')
    },

    placeId(placeId) {
        if (!placeId || placeId === '') throw new ValidationError('Todos los campos deben contener algún valor')
        if (typeof placeId !== 'string') throw new ValidationError(' placeId inválido')
        if (placeId.length !== 24) throw new ValidationError("longitud del placeId inválida")
    },

    vehicleRegistration(vehicleRegistration) {
        if (!vehicleRegistration || vehicleRegistration === '') throw new ValidationError('Todos los campos deben contener algún valor')
        if (typeof vehicleRegistration !== 'string') throw new ValidationError('Matrícula no válida')
        if (vehicleRegistration.length !== 8) throw new ValidationError('Longitud de matrícula tiene que ser de 8')

        if (!vehicleRegistration.includes('-')) throw new ValidationError('Matrícula sin guión')
    },

    parkingId(parkingId) {
        if (!parkingId || parkingId === '') throw new ValidationError('Todos los campos deben contener algún valor')
        if (typeof parkingId !== 'string') throw new ValidationError(' placeId inválido')
        if (parkingId.length !== 24) throw new ValidationError("longitud del placeId inválida")
    }

}

export default validate