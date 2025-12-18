fetch('http://localhost:8082/places/67842bbe1d15249790c8a55d', {
    method: 'GET',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2Nzg0MmJiZTFkMTUyNDk3OTBjOGE1NTUiLCJpYXQiOjE3MzY5NzM2NjB9.XYMVzcw12sQ3XbhboS9rL6TUosZgveT2jdq9rNj1yMU'
    },
})
    .then(response => {
        console.log(response.status)
        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => {
        console.error(error)
    })