fetch('http://localhost:8082/places', {
    method: 'GET',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzY1YjVmYzQwMTY3MjNhZTUzZTllYmYiLCJpYXQiOjE3MzQ3MjMzNzJ9.dAiqYfb4ilf0lRXyNNHHHv42N3Rnq0WNlt0NxtsYrdg'
    }
})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))