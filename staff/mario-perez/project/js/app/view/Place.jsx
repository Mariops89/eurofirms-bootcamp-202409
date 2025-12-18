import { utils } from 'com'

import deletePlace from '../logic/deletePlace.js'
import { useState } from 'react'

import EditPlace from './EditPlace.jsx'

function Place(props) {
    console.log('Place -> render')
    console.log(props)

    const [status, setStatus] = useState('read')

    const place = props.place
    console.log(place)
    const { date: formattedDateCheckout, time: formattedTimeCheckout } = utils.formatDate(place.checkout)
    const { date: formattedDateCheckin, time: formattedTimeCheckin } = utils.formatDate(place.checkin)

    const calculateTotalPrice = () => {
        const checkinDate = new Date(place.checkin)
        const checkoutDate = new Date(place.checkout)

        // Calcula la diferencia en minutos
        const differenceInMinutes = (checkoutDate - checkinDate) / (1000 * 60)

        // Convierte el precio almacenado en la BD (por hora * 100) al precio por minuto
        const pricePerMinute = (place.parking.price / 100) / 60


        // Calcula el precio total
        return differenceInMinutes * pricePerMinute;
    };

    const totalPrice = calculateTotalPrice();


    const handleDeletePlaceClick = () => {
        try {
            deletePlace(place.id)
                .then(() => props.onPlaceDeleted())
        } catch (error) {
            alert(error.message)

            console.error(error)
        }
    }

    const handleEditPlaceClick = () => {
        setStatus('edit')
    }

    const handleEditPlaceSuccess = () => {
        setStatus('read')
        props.onPlaceEdited()
    }


    return (
        <article className="border-2 border-black m-2">
            {
                status === 'read' && <>
                    <div className="mt-5 mb-5 text-center" >
                        <h2 className="text-4xl">Tu coche con matrícula {place.vehicleRegistration}</h2>
                    </div>

                    <div className="text-center text-2xl">
                        <h3>{place.parking.name}</h3>
                        <h4>Nivel: {place.level}</h4>
                    </div>

                    <div className="text-center text-2xl">
                        <h4>Plaza: {place.space}</h4>
                    </div>

                    <div className="text-center text-2xl">
                        <h4>Comienza el : {formattedDateCheckin} a las {formattedTimeCheckin}</h4>
                        <h4>Finaliza el : {formattedDateCheckout} a las {formattedTimeCheckout}</h4>
                    </div>

                    <div className="text-center text-2xl">
                        <h4>Precio total a pagar:  {totalPrice.toFixed(2)} €</h4>
                    </div>

                    <div className="text-center text-2xl">
                        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded m-5" name='' onClick={handleEditPlaceClick}>Editar plaza</button>

                        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded m-5" onClick={handleDeletePlaceClick}>Quitar plaza</button>
                    </div>
                </>
            }

            {
                status === 'edit' && <>
                    <EditPlace place={place} backToView={() => setStatus('read')} onEditPlaceSuccess={handleEditPlaceSuccess} />
                </>
            }


        </article>
    )
}

export default Place