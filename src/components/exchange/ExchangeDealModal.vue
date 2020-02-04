<template>
  <div>
    <app-modal 
      :onModalSubmit="submitModal"
      modalHeader="Make Exchange Deal"
      submitText="Confirm">
      <template #openingButton>
        <button
          class="button is-fullwidth is-large is-danger is-outlined m-b-sm">
          Make a deal
        </button>
      </template>

      <div class="deal">
        <div class="deal-highlight">{{ exchange.user.fullName }} is offering:</div>
        <div class="deal-wrapper">
          <div>Offering {{ exchange.type }}</div>
          <div>{{ exchange.title }}</div>
        </div>
        <div class="deal-highlight">Your Offer</div>
        <div class="counter-offer">
          <div class="field">
            Would you prefer to exchange credit ?
            <label class="checkbox is-large">
              <input 
                v-model="isOfferingCredit"
                type="checkbox">
              Yes
            </label>
          </div>
          <div 
            class="field"
            :class="!isOfferingCredit ? 'disabled' : '' ">
            <label class="label">How Much Credit ?</label>
            <div class="control">
              <input
                class="input"
                type="number"
                placeholder="40">
            </div>
          </div>
          <div 
            class="field"
            :class="isOfferingCredit ? 'disabled' : '' ">
            <label class="label">Exchange</label>
            <div class="control">
              <div class="select">
                <select>
                  <option value="service">Exchange 1</option>
                  <option value="product">Exchange 2</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

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
    },
    exchange: {
      required: true,
      type: Object
    }
  },
  components: {
    appModal
  },
  data () {
    return {
      isOfferingCredit: false
    }
  },
  methods: {
    submitModal(closeCallback) {
      
    }
  }
}
</script>

<style scoped lang="scss">
  .deal-wrapper {
    margin-bottom: 10px
  }
  .counter-offer, .deal-wrapper {
    border: 2px solid grey;
    padding: 10px;
    margin-top: 10px;
    &-title {
      font-size: 21px;
      margin: 5px 0;
      font-weight: bold;
    }
  }
  .deal {
    font-size: 19px;
    &-highlight {
      font-size: 19px;
      font-weight: bold;
    }
  }
  .disabled {
  &.field {
    input, textarea, select {
      pointer-events: none;
      color: grey;
    }
    label {
      color: grey;
    }
  }
}
</style> 