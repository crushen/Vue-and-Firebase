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
            <div 
              v-if="$v.form.title.$error"
              class="form-error">
              <span 
                v-if="!$v.form.title.required"
                class="help is-danger">
                Title is required
              </span>
              <span 
                v-if="!$v.form.title.minLength"
                class="help is-danger">
                Minimum length of title is 10 characters
              </span>
            </div>
          </div>
        </div>
        <div class="field">
          <label class="label">Description</label>
          <div class="control">
            <textarea 
              v-model="form.description"
              class="textarea" 
              placeholder="Description" />
            <div 
              v-if="$v.form.description.$error"
              class="form-error">
              <span 
                v-if="!$v.form.description.required"
                class="help is-danger">
                Description is required
              </span>
            </div>
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
            <div 
              v-if="$v.form.image.$error"
              class="form-error">
              <span 
                v-if="!$v.form.image.required"
                class="help is-danger">
                Image is required
              </span>
              <span 
                v-if="!$v.form.image.url"
                class="help is-danger">
                Image URL is not valid
              </span>
            </div>
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
            <div 
              v-if="$v.form.price.$error"
              class="form-error">
              <span 
                v-if="!$v.form.price.required"
                class="help is-danger">
                Price is required
              </span>
            </div>
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
            <div 
              v-if="$v.form.country.$error"
              class="form-error">
              <span  
                v-if="!$v.form.country.required"
                class="help is-danger">
                Country is required
              </span>
            </div>
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
            <div 
              v-if="$v.form.city.$error"
              class="form-error">
              <span 
                v-if="!$v.form.city.required"
                class="help is-danger">
                City is required
              </span>
            </div>
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
import { required, minLength, url } from 'vuelidate/lib/validators';

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
  validations: {
    form: {
      title: {
        required,
        minLength: minLength(10)
      },
      description: {
        required
      },
      image: {
        required,
        url
      },
      price: {
        required
      },
      country: {
        required
      },
      city: {
        required
      }
    }
  },
  methods: {
    createExchange() {
      this.$v.form.$touch();
      if(!this.$v.form.$invalid) {
        alert(JSON.stringify(this.form));
      }
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
