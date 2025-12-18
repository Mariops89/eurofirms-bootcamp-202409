function Welcome(props) {
    console.log('WelcomeView -> render')
    return <main className="text-center p-20">
        <p>
            ParkSpot, la app para localizar tu coche.</p>
        <div className="flex flex-col gap-10 m-10">
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={
                function (event) {
                    event.preventDefault()

                    props.onRegisterClick()
                }
            }>Registrar </button>
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={
                function (event) {
                    event.preventDefault()

                    props.onLoginClick()
                }} >Iniciar sesión</button>
        </div>
    </main>
}

export default Welcome