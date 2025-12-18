fetch('http://localhost:8082/places/679003174c8160a3c2b6ac26', {
    method: 'PATCH',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2Nzg0MmJiZTFkMTUyNDk3OTBjOGE1NTciLCJpYXQiOjE3Mzc1Nzk4Mjl9.1bU3RvvGoFV5xayeZxx-Wm1FWIA5GKqrQGSN9qR1REA',
        'Content-Type': 'application/json'
    },
    body: '{"parkingId":"67842bbe1d15249790c8a559", "level":2, "space":"2H", "checkin":"2024-12-20T08:00:00.000Z","checkout":"2024-12-20T09:10:00.000Z", "vehicleRegistration":"3561-HUB"}'
})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))