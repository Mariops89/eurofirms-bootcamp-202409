fetch('http://localhost:8082/users/6760980f685b923cafc606e9/name', {
    method: 'GET',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzYwOTgwZjY4NWI5MjNjYWZjNjA2ZTkiLCJpYXQiOjE3MzQ0NjQ0OTh9.Vw1DbghIu5gLg0daoFosPiVSi4sK0qnaW6eAfPGYOGY'
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