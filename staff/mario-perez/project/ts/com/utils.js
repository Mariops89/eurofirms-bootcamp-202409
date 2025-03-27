function extractPayload(token) {
    const [, payload64,] = token.split('.')
    const payloadJSON = atob(payload64)
    const payload = JSON.parse(payloadJSON)

    return payload
}

function formatDate(dateString) {
    const date = new Date(dateString)
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    const formattedDate = `${day}/${month}/${year}`
    const formattedTime = `${hours}:${minutes}:${seconds}`

    return {
        date: formattedDate,
        time: formattedTime
    }
    //return `${day}-${month}-${year}${hours}:${minutes}:${seconds}`;
}

const utils = {
    extractPayload,
    formatDate
}

export default utils