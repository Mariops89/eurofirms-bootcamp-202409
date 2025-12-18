fetch('http://localhost:8082/parkings', {
    method: 'GET'
})
    .then(response => {
        console.log(response.status)

        return response.json()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))