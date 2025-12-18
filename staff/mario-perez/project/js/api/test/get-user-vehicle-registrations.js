fetch('http://localhost:8082/places/67842bbe1d15249790c8a557/vehicle-registrations', {
    method: 'GET',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2Nzg0MmJiZTFkMTUyNDk3OTBjOGE1NTciLCJpYXQiOjE3NDQxNDc5OTZ9.JcE_7omiOruaa2LN7ynzd6MPsRXRpnM3Bjto5xhIF8g'
    },
})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))