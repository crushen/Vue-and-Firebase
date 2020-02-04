import { firestoreAction } from 'vuexfire'
import { db } from '@/db';

export default {
  namespaced: true,
  state() {
    return {
      items: [],
      item: {}
    }
  },
  actions: {
    getExchanges() {
      // Make a call to Firebase and ask for data
      db.collection('exchanges')
        .doc('od8mMgfC0h5ncg1eobGE')
        .get()
        .then(snapshot => {
          const exchange = snapshot.data();
          return exchange;
        })

      //commit('setExchanges', exchanges);
    },
    getExchangeById({commit}, exchangeId) {
      commit('setExchange', {});
      return db.collection('exchanges')
      .doc(exchangeId)
      .get()
      .then(async snapshot => {
        const exchange = snapshot.data();
        const userSnapshot = await exchange.user.get();
        exchange.user = userSnapshot.data();
        commit('setExchange', exchange);
        return exchange;
      })
    },
    bindExchanges: firestoreAction(({ bindFirestoreRef }) => {
      // return the promise returned by `bindFirestoreRef`
      return bindFirestoreRef('items', db.collection('exchanges'));
    }),
    createExchange(context, exchange) {
      exchange.status = 'active';
      exchange.price = parseInt(exchange.price, 10);
      const userRef = db.collection('profiles').doc(context.rootState.auth.user.uid);
      exchange.user = userRef;
      // TODO: After exchange is created, add exchange to user profile on Firestore and locally in Vue store
      return db.collection('exchanges').add(exchange);
    }
  },
  mutations: {
    setExchanges(state, exchanges) {
      state.items = exchanges;
    },
    setExchange(state, exchange) {
      state.item = exchange;
    }
  }
}
