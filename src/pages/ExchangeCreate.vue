<template>
  <div class="container">
    <div class="form-container">
      <form>
        <div class="field">
          <label class="label">Type</label>
          <div class="control">
            <div class="select">
              <select v-model="form.type">
                <option value="service">Service</option>
                <option value="product">Product</option>
              </select>
            </div>
          </div>
        </div>
        <div class="field">
          <label class="label">Title</label>
          <div class="control">
            <input 
              v-model="form.title"
              class="input" 
              type="text" 
              placeholder="Title">
          </div>
        </div>
        <div class="field">
          <label class="label">Description</label>
          <div class="control">
            <textarea 
              v-model="form.description"
              class="textarea" 
              placeholder="Description" />
          </div>
        </div>
        <div class="field">
          <label class="label">Image Link</label>
          <div class="control">
            <input 
              v-model="form.image"
              class="input" 
              type="text" 
              placeholder="Image Link">
          </div>
        </div>
        <div class="field">
          <label class="label">Price</label>
          <div class="control">
            <input 
              v-model="form.price"
              class="input" 
              type="number" 
              placeholder="Price">
          </div>
        </div>
        <div class="field">
          <label class="label">Country</label>
          <div class="control">
            <input 
              v-model="form.country"
              class="input" 
              type="text" 
              placeholder="Country">
          </div>
        </div>
        <div class="field">
          <label class="label">City</label>
          <div class="control">
            <input 
              v-model="form.city"
              class="input" 
              type="text" 
              placeholder="City">
          </div>
        </div>

        <!-- TODO: Provide tags input -->

        <div class="field is-grouped">
          <div class="control">
            <button 
              @click="createExchange"
              type="button"
              class="button is-link">
              Submit
            </button>
          </div>
          <div class="control">
            <button class="button is-text">Cancel</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        type: 'service',
        title: '',
        description: '',
        image: '',
        price: null,
        country: '',
        city: '',
        tags: []
      }
    }
  },
  methods: {
    createExchange() {
      alert(JSON.stringify(this.form));
    }
  }
}
</script>


<style>
.form-container {
  max-width: 960px;
  margin: 0 auto;
}
</style>
