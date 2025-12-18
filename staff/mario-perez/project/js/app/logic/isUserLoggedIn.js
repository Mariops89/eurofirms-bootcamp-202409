function isUserLoggedIn() {
    if (sessionStorage.token !== undefined) return true

    return false
}

export default isUserLoggedIn