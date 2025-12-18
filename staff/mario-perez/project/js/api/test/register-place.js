fetch('http://localhost:8082/places', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzYwOTgwZjY4NWI5MjNjYWZjNjA2ZTkiLCJpYXQiOjE3MzQ0NjQ0OTh9.Vw1DbghIu5gLg0daoFosPiVSi4sK0qnaW6eAfPGYOGY'
    },
    body: '{"parkingId":"6765b5fc4016723ae53e9ec3", "level": 3, "space": "1L", "checkin": "2024-12-20T19:00:00.000Z", "checkout": "2024-12-20T22:30:00.000Z", "vehicleRegistration": "5555-GUL" }'
})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))

/* 201 */