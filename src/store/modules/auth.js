import firebase from 'firebase/app'
import 'firebase/auth'
import { db } from '@/db'

export default {
  namespaced: true,
  state: {
    user: null
  },
  getters: {
    isAuthenticated(state) {
      return !!state.user;
    }
  },
  actions: {
    signUp(context, {email, password}) {
      return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(({user}) => {
          // TODO: Create profile collection in Firestore
          return user
        }).catch(error => {
          const message = error.message;
          return Promise.reject(message);
        })
    },
    signIn(context, {email, password}) {
      return firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(error => Promise.reject(error.message))
    },
    signOut({commit}) {
      return firebase.auth().signOut()
        .then(_ => commit('setAuthUser', null))
    },
    createUserProfile(context, {uid, userProfile}) {
      return db
        .collection('profiles')
        .doc(uid)
        .set(userProfile)
    }
  },
  mutations: {
    setAuthUser(state, user) {
      state.user = user;
    }
  }
}