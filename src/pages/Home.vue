<template>
  <div>
    <hero />
    <section class="posts">
      <div class="container">
        <div class="posts-type">Latest Posts</div>
        <exchange-list
          :exchanges="exchanges" />
      </div>
    </section>
    <button @click="$store.dispatch('test')" class="button is-primary">Text Vuex</button>
    <pagination />
  </div>
</template>

<script>
import Hero from '@/components/Hero';
import Pagination from '@/components/Pagination';
import ExchangeList from '@/components/exchange/ExchangeList';

export default {
  name: 'home',
  components: {
    Hero,
    Pagination,
    ExchangeList
  },
  created() {
    this.$store.dispatch('exchange/bindExchanges'); // reference module before action - module/action
  },
  computed: {
    exchanges() {
      return this.$store.state.exchange.items; // reference module before data - module.data
    }
  }
}
</script>