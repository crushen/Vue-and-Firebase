import * as firebase from 'firebase'

export default {
  namespaced: true,
  actions: {
    signUp(context, {email, password}) {
      return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(({user}) => {
          return user
        }).catch(error => {
          const message = error.message
          return Promise.reject(message);
        })
    }
  }
}