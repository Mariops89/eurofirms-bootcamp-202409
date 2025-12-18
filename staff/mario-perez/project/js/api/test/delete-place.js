fetch('http://localhost:8082/places/677023bffc67141d4b0f28a3', {
    method: 'DELETE',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzY1YjVmYzQwMTY3MjNhZTUzZTllYmYiLCJpYXQiOjE3MzYxMDQ2MjB9.6crBsuCHCd2wLw9ZStwIMFXXJv3feyltC2B68ZSOFZQ'
    }
})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))