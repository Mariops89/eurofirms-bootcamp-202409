import { errors } from 'com'

const { CredentialsError, SystemError, ValidationError } = errors

import loginUser from '../logic/loginUser.js'


function Login(props) {
    console.log('LoginView -> render')

    const handleLoginSubmit = event => {
        event.preventDefault()

        var form = event.target

        var username = form.username.value
        var password = form.password.value

        try {
            loginUser(username, password)
                .then(() => props.onLoginSuccess())
                .catch(error => {
                    if (error instanceof CredentialsError)
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

    const handleRegisterClick = event => {
        event.preventDefault()

        props.onRegisterClick()
    }

    return <main>
        <h2 className=" text-xl text-center text-red-500">Iniciar sesión</h2>

        <form className="flex flex-col gap-2 px-4" onSubmit={handleLoginSubmit}>

            <label htmlFor="username">Usuario</label>
            <input placeholder="Escribe tu usuario" type="text" id="username" />

            <label htmlFor="password">Contraseña</label>
            <input placeholder="Escribe tu contraseña" type="password" id="password" />

            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded m-5" type="submit">Iniciar sesión</button>
        </form>

        <p></p>

        <p className='pt-20 text-center'>¿No estás registrado? <a href="" className="hover:text-red-500" onClick={handleRegisterClick}>
            Regístrate ahora</a>.</p>

    </main >
}

export default Login