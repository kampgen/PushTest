var gcm = require('node-gcm')


// this.config = (deps && deps.config) || require('../../config').default
this.Sender = gcm.Sender
this.Message = gcm.Message
// this.UsersInteractor = (deps && deps.UsersInteractor) || UsersInteractor

let sender = new this.Sender('AAAAWGLtjjw:APA91bGtenGBYgnLGC4iv5kvABSFgS2ZdVXzeONiPHqEOhxQbKfdjF5SMSBnU9zUExSjNhaqKY4rcAJrdM5M_-mvoO9QPyt9RL_A2g04rJ_nB1z5x2WzoX-T9rv55RheIdvo0qhGjr7J')
// let usersInteractor = new this.UsersInteractor

let msg = new this.Message({
    notification: {
        title: 'titulo',
        body: 'teste',
    },
    data: { dsfuhdsdf: 'teste' }
})
return new Promise((resolve, reject) => {
    // let id = user.id || user.user_id
    // usersInteractor.fetchOne(id)
        .then(user => {
            let tokens = ['ecUQ7qQLvKk:APA91bGMpcDCi08R4ZAZnw0FX1iantfzzUwj9fvy7Hp9bZyu10fMfiGVKxZ9IIcusmPCQFBVRJcRkCq2zkiF471YBnu0q1U1cZ96xb-aAcUaiwnEs6Ntwv041ZlhXum5TzGdg42qM6EN']
            sender.send(msg, tokens, (a, err) => {
                resolve({ tokens, message })
            })
        })
})
