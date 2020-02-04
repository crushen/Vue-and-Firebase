<template>
  <div>
    <app-modal 
      :onModalSubmit="submitModal"
      :modalHeader="modalHeader">
      <template #openingButton>
        <button
          class="button is-primary is-outlined m-t-sm">
          Update profile
        </button>
      </template>

      <form>
        <div class="field">
          <label class="title">Full Name</label>
          <input v-model="profileToUpdate.fullName" class="input">
        </div>
        <div class="field">
          <label class="title">Username</label>
          <input v-model="profileToUpdate.userName" class="input">
        </div>
        <div class="field">
          <label class="title">Avatar</label>
          <input v-model="profileToUpdate.avatar" class="input">
        </div>
        <div class="field">
          <label class="title">Info</label>
          <input v-model="profileToUpdate.info" class="input">
        </div>
      </form>
    </app-modal>
  </div>
</template>

<script>
import appModal from '@/components/Modal';

export default {
  props: {
    userProfile: {
      required: true,
      type: Object
    },
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
      modalHeader: 'Update Profile',
      profileToUpdate: {...this.userProfile}
    }
  },
  methods: {
    submitModal(closeCallback) {
      this.onModalSubmit({...this.profileToUpdate}, closeCallback);
    }
  }
}
</script>
