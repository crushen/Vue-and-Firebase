import * as firebase from 'firebase'

export default {
  namespaced: true,
  actions: {
    signUp(context, {email, password}) {
      return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => {
          alert(user)
        }).catch(error => {
          alert(error)
        })
    }
  }
}