<template>
  <div>
    <div 
      v-if="$slots.openingButton"
      @click="isOpen = !isOpen">
      <slot name="openingButton" />
    </div>
    <button 
      v-else
      @click="isOpen = !isOpen" 
      class="button is-primary is-outlined m-t-sm">
      Open Modal
    </button>

    <div :class="['modal', {'is-active': isOpen}]">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">{{ modalHeader }}</p>
          <button
            @click="isOpen = false"
            class="delete"
            aria-label="close"></button>
        </header>
        <section class="modal-card-body">

          <slot />

        </section>
        <footer class="modal-card-foot">
          <button
            @click="submitModal" 
            class="button is-success">{{ submitText }}</button>
          <button @click="isOpen = false" class="button">Cancel</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      onModalSubmit: {
        required: true,
        type: Function
      },
      modalHeader: {
        required: true,
        type: String,
        default: 'Confirmation'
      },
      submitText: {
        required: true,
        type: String,
        default: 'Save Changes'
      }
    },
    data () {
      return {
        isOpen: false
      }
    },
    methods: {
      submitModal() {
        this.onModalSubmit(() => {
          this.isOpen = false;
        })
      }
    }
  }
</script>

<style>
</style> 