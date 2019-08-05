export default {
    // login 
    signIN: function(data) {
        console.log(data)
        alert('signin reached')
        return fetch('/', {
            method: 'GET',
            Headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)

        })
    },
    signUp: function(info) {
        return fetch('/register', {
            method: 'POST',
            Headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'info'
        })
    },
    logOut: function() {
        return fetch('/logout', {
            method: 'GET'
        })
    }
}