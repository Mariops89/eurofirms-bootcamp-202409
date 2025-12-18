import { useState } from "react"

import Welcome from "./view/Welcome.jsx"
import Login from "./view/Login.jsx"
import Register from "./view/Register.jsx"
import Home from "./view/Home.jsx"
import CreatePlace from "./view/CreatePlace.jsx"
import EditPlace from "./view/EditPlace.jsx"
import isUserLoggedIn from "./logic/isUserLoggedIn.js"

function App() {
    console.log('App -> render')

    const [view, setView] = useState(isUserLoggedIn() ? 'home' : 'welcome')

    console.log('App -> state: view = ' + view)

    const handleGoToLogin = () => setView('login')
    const handleGoToHome = () => setView('home')
    const handleEditPlaceClick = () => setView('editPlace')
    const handleCreatePlaceClick = () => setView('createPlace')
    const handleRegisterClick = () => setView('register')

    return <>
        <h1 className="text-2xl">ParkSpot</h1>

        {view === 'welcome' && <Welcome
            onRegisterClick={handleRegisterClick}
            onLoginClick={handleGoToLogin}
        />}

        {view === 'register' && <Register
            onLoginClick={handleGoToLogin}
            onRegisterSuccess={handleGoToLogin}
        />}

        {view === 'login' && <Login
            onRegisterClick={handleRegisterClick}
            onLoginSuccess={handleGoToHome}
        />}

        {view === 'home' && <Home
            onLogout={handleGoToLogin}
            onCreatePlaceClick={handleCreatePlaceClick}
            onEditPlaceClick={handleEditPlaceClick}
        />}

        {view === 'createPlace' && <CreatePlace
            onCreatePlaceSuccess={handleGoToHome}
            onBackHomeClick={handleGoToHome}
        />}

        {view === 'editPlace' && <EditPlace
            onBackHomeClick={handleGoToHome}
        />}
    </>
}

export default App