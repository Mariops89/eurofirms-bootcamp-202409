import mongoose from "mongoose"
import { IUser, IParking, IPlace, User, Parking, Place } from "./models.ts"

mongoose.connect('mongodb://127.0.0.1:27017/project')
    .then(() => User.deleteMany())
    .then(() => Parking.deleteMany())
    .then(() => Place.deleteMany())

    .then(() => {

        // users 
        const pepito = new User<IUser>({
            name: 'Pepito Grillo',
            email: 'pepito@grillo.com',
            username: 'pepitogrillo',
            password: '123123123'
        })

        const campa = new User<IUser>({
            name: 'Campa Nilla',
            email: 'campa@nilla.com',
            username: 'campanilla',
            password: '123123123'
        })

        const peter = new User<IUser>({
            name: 'Peter Pan',
            email: 'peter@pan.com',
            username: 'peterpan',
            password: '123123123'
        })

        const wendy = new User<IUser>({
            name: 'Wendy Darling',
            email: 'wendy@darling.com',
            username: 'wendydarling',
            password: '123123123'
        })

        // parkings
        const augusta = new Parking<IParking>({
            name: 'Parking Augusta',
            address: 'Avda de Navarra, s/n',
            city: 'Zaragoza',
            levels: 2,
            price: 0,
            capacity: 3600
        })

        const grancasa = new Parking<IParking>({
            name: 'Parking Grancasa',
            address: 'Calle Maria Zambrano, 35',
            city: 'Zaragoza',
            levels: 3,
            price: 100,
            capacity: 4800
        })

        const salamero = new Parking<IParking>({
            name: 'Parking Indigo Salamero',
            address: 'Plaza de Miguel Salamero, s/n',
            city: 'Zaragoza',
            levels: 2,
            price: 210,
            capacity: 3600
        })

        const elcarmen = new Parking<IParking>({
            name: 'Parking Indigo - El Carmen',
            address: 'Calle del Marqués de Casa Jiménez, s/n',
            city: 'Zaragoza',
            levels: 2,
            price: 105,
            capacity: 3600
        })

        // places
        const place1 = new Place<IPlace>({
            parking: grancasa._id,
            level: 2,
            space: '2A',
            checkin: new Date('2024-12-16T09:00:00Z'),
            checkout: new Date('2024-12-16T17:00:00Z'),
            free: false,
            user: pepito._id,
            vehicleRegistration: '1234-ABC'

            //location:
        })

        const place2 = new Place<IPlace>({
            parking: grancasa._id,
            level: 2,
            space: '2G',
            checkin: new Date('2024-12-15T08:00:00Z'),
            checkout: new Date('2024-12-15T18:00:00Z'),
            free: true,
            user: peter._id,
            vehicleRegistration: '4567-DEF'
            //location:
        })
        return Promise.all([
            pepito.save(),
            campa.save(),
            peter.save(),
            wendy.save(),
            augusta.save(),
            grancasa.save(),
            salamero.save(),
            elcarmen.save(),
            place1.save(),
            place2.save()
        ])
    })
    .then(items => {
        const [pepito, campa, peter, wendy, augusta, grancasa, salamero, elcarmen, place1, place2] = items

        console.log(items)
    })

    .then(() => console.log('populated'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())
