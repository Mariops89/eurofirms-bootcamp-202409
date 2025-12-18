fetch('http://localhost:8082/vehicles', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2N2Y4MjAxZDU5YWExZWQ4NGVjYjliZDYiLCJpYXQiOjE3NDQ1NzIzOTZ9.6f0XaTjMj28IZxaFHq1cLQunmb7QMHlHTAFoOgagsFA'
    },
    body: '{"userId": "67f8201d59aa1ed84ecb9bd6", "registration":"1545-OOO"}'
})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))

/* 201 */