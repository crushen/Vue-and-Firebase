import { firestoreAction } from 'vuexfire'
import { db } from '@/db';

export default {
  namespaced: true,
  state() {
    return {
      items: []
    }
  },
  actions: {
    // getExchanges({commit}) {
    //   db.collection('exchanges')
    //     .doc('od8mMgfC0h5ncg1eobGE')
    //     .get()
    //     .then(snapshot => {
    //       const exchange = snapshot.data();
    //       return exchange
    //     })

    //   commit('setExchanges', exchanges);
    // },
    bindExchanges: firestoreAction(({ bindFirestoreRef }) => {
      // return the promise returned by `bindFirestoreRef`
      return bindFirestoreRef('items', db.collection('exchanges'))
    })
  },
  mutations: {
    setExchanges(state, exchanges) {
      state.items = exchanges;
    }
  }
}
