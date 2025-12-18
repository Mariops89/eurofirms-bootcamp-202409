import { errors } from 'com'

const { DuplicityError, SystemError, ValidationError } = errors

import registerUser from '../logic/registerUser.js'

function Register(props) {
    console.log('RegisterView -> render')

    const handleRegisterSubmit = event => {
        event.preventDefault()

        var form = event.target

        var name = form.name.value
        var email = form.email.value
        var username = form.username.value
        var password = form.password.value

        try {
            registerUser(name, email, username, password)
                .then(() => props.onRegisterSuccess())
                .catch(error => {
                    if (error instanceof DuplicityError)
                        alert(error.message)
                    else if (error instanceof SystemError)
                        alert('Hubo un problema. Inténtalo más tarde.')

                    console.error(error)
                })
        } catch (error) {
            if (error instanceof ValidationError)
                alert(error.message)
            else
                alert('Hubo un problema. Inténtalo más tarde.')

            console.error(error)
        }
    }

    const handleLoginClick = event => {
        event.preventDefault()

        props.onLoginClick()
    }

    return <main>
        <div>
            <h2 className='text-xl text-center text-red-500'>Registro</h2>
        </div>

        <form className="flex flex-col gap-2 px-4" onSubmit={handleRegisterSubmit}>
            <label htmlFor="name">Nombre</label>
            <input placeholder="Escribe tu nombre" type="text" id="name" />

            <label htmlFor="email">Correo electrónico</label>
            <input placeholder="Escribe tu correo electrónico" type="email" id="email" />

            <label htmlFor="username">Usuario</label>
            <input placeholder="Escribe el nombre con el que quieras que te vean" type="text" id="username" />

            <label htmlFor="password">Contraseña</label>
            <input placeholder="Escribe tu contraseña" type="password" id="password" />

            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded m-5" type="submit">Registrar</button>
        </form>

        <p></p>

        <p className='pt-20 text-center'>¿Ya estás registrado? <a href="" className="hover:text-red-500" onClick={handleLoginClick}>Inicia sesión</a>.</p>

    </main>
}

export default Register