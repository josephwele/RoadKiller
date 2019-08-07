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
    },
    saveInfo: function(info) {
        return fetch('/form/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        })
    },
    dataInfo: function(info) {
        return fetch('/form', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        })
    }

}