<template>
  <div>
    <app-modal 
      :onModalSubmit="submitModal"
      :modalHeader="modalHeader">
      <template #openingButton>
        <button
          class="button is-fullwidth is-large is-danger is-outlined m-b-sm">
          Make a deal
        </button>
      </template>

      <h1>Some Deal</h1>
    </app-modal>
  </div>
</template>

<script>
import appModal from '@/components/Modal';

export default {
  props: {
    onModalSubmit: {
      required: true,
      type: Function
    }
  },
  components: {
    appModal
  },
  data () {
    return {
      modalHeader: 'Make Exchange Deal'
    }
  },
  methods: {
    submitModal(closeCallback) {
      
    }
  }
}
</script>
