export default {
    // login 
    signIN: function(data) {
        alert("signin reached")
        return fetch('/login', {
            method: 'POST',
            Headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(data)

        })
    },
    signUp: function(info) {
        return fetch('/register', {
            method: 'POST',
            Headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        })
    },
    logOut: function() {
        return fetch('/logout', {
            method: 'GET'
        })
    }
}