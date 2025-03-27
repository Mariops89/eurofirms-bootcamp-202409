import { errors } from "com"
import createPlace from "../logic/createPlace.js"
import getParkings from "../logic/getParkings.js"

import { useState, useEffect } from 'react'

const { ValidationError, SystemError, NotFoundError, OwnerShipError, DuplicityError, TimeError } = errors

function CreatePlace(props) {
    console.log('CreatePlace -> render')
    const date = new Date()
    date.setHours(date.getHours() + 1)
    let dateNow = date.toISOString().slice(0, 16)

    const place = props.place
    const [parkings, setParkings] = useState([])
    const [levels, setLevels] = useState([])
    const [dateCheckIn, setDateCheckIn] = useState(dateNow)
    const [dateCheckOut, setDateCheckOut] = useState(dateNow)

    useEffect(() => {
        handleGetParking()
    }, [])

    const handleCreatePlaceSubmit = event => {
        event.preventDefault()

        const form = event.target

        const parking = form.parking.value
        const level = Number(form.level.value)
        const space = form.space.value
        const checkin = form.checkin.value
        const checkout = form.checkout.value
        const vehicleRegistration = form.vehicleRegistration.value

        try {
            createPlace(parking, level, space, checkin, checkout, vehicleRegistration)
                .then(() => props.onCreatePlaceSuccess())
                .catch(error => {
                    if (error instanceof DuplicityError)
                        alert(error.message)
                    else if (error instanceof TimeError)
                        //TODO cambiar mensaje
                        alert(error.message)
                    else if (error instanceof SystemError)
                        //TODO cambiar mensaje
                        alert('Hubo un problema. Inténtalo más tarde.')

                    console.error(error)
                })
        } catch (error) {
            if (error instanceof ValidationError)
                alert(error.message)
            else
                //TODO cambiar mensaje
                alert('Hubo un problema. Inténtalo más tarde.')

            console.error(error)
        }
    }

    const handleGetParking = () => {
        try {
            getParkings()
                .then((parkings) => setParkings(parkings))
                .catch(error => {
                   /* if (error instanceof DuplicityError)
                    alert (error.message) 
                    else */ if (error instanceof SystemError)
                        //TODO cambiar mensaje
                        alert('Hubo un problema')
                })


        } catch (error) {
            if (error instanceof ValidationError) {
                alert(error.message)
            } else {
                //TODO cambiar mensaje
                alert('Hubo un problema')
            }
        }
    }

    // Muestra los niveles del parking seleccionado

    const handleParkingChange = event => {
        const selectedParking = parkings.find(parking => parking.id === event.target.value)
        console.log('Parking seleccionado: ', selectedParking)
        if (selectedParking) {
            const levels = Array.from({ length: selectedParking.levels }, (_, i) => i + 1)
            console.log('Niveles seleccionados: ', levels)
            setLevels(levels)
        } else {
            setLevels([])
        }

    }

    const handleSetTimeCheckIn = event => {
        const value = event.target.value

        if (value.length > 16) {
            setDateCheckIn(value.slice(0, value.length - 3))
        } else {
            setDateCheckIn(event.target.value)
        }
    }

    const handleSetTimeCheckOut = event => {
        const value = event.target.value

        if (value.length > 16) {
            setDateCheckOut(value.slice(0, value.length - 3))
        } else {
            setDateCheckOut(event.target.value)
        }
    }

    const handleBackHomeClick = event => {
        props.onBackHomeClick()
    }

    return <article className="p-10">
        <div>
            <h2 className='text-xl text-center text-red-500'>Aparcar en una plaza</h2>
        </div>

        <form className="flex flex-col gap-2 mt-10" onSubmit={handleCreatePlaceSubmit}>
            <select id="parkings" name="parking" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleParkingChange}>
                <option value="">Elige un parking</option>
                {parkings.map(parking => (
                    <option key={parking.id} value={parking.id}>{parking.name}</option>
                ))}
            </select>

            <select id="level" name="level" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="">Elige un nivel</option>
                {levels.map(level => (
                    <option key={level} value={level}>{level}</option>
                ))}
            </select>

            <label htmlFor="space">Plaza</label>
            <input placeholder="Escribe la plaza donde has aparcado" type="text" id="space" />

            <label htmlFor="checkin">Hora de entrada</label>
            <input placeholder="Escribe cuándo entras" type="datetime-local" id="checkin" value={dateCheckIn} onChange={handleSetTimeCheckIn} step="60" />

            <label htmlFor="checkout">Hora de salida</label>
            <input placeholder="Escribe cuándo sales " type="datetime-local" id="checkout" value={dateCheckOut} onChange={handleSetTimeCheckOut} step="60" />

            <label htmlFor="vehicleRegistration">Matrícula</label>
            <input placeholder="Escribe la matrícula de tu automóvil" type="text" id="vehicleRegistration" />


            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded m-5" type="submit">Crear</button>
        </form>

        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded m-5" onClick={handleBackHomeClick}>Volver</button>
    </article>
}

export default CreatePlace