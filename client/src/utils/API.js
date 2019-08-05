export default {
    // login 
    signIN: function(data) {
        console.log(data)
        alert('signin reached')
        return fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)

        })
    },
    signUp: function(info) {
        alert('signup reached')
        console.log(info)
        return fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
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