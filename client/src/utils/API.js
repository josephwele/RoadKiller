export default {
    // login 
    signIN: function(data) {
        alert(data.userName)
        return fetch('/login', {
            method: 'POST',
            Headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(data)

        })
    }
}