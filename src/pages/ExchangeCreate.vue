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
              @blur="$v.form.title.$touch"
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
              @blur="$v.form.description.$touch"
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
              @blur="$v.form.image.$touch"
              v-model="form.image"
              class="input" 
              type="text" 
              placeholder="Image Link">
            <div 
              v-if="$v.form.image.$error"
              class="form-error">
              <span 
                v-if="!$v.form.image.url"
                class="help is-danger">
                Image URL is not valid
              </span>
              <span 
                v-if="!$v.form.image.supportedFileType"
                class="help is-danger">
                Image extension is not supported (must be jpg, png, jpeg, svg)
              </span>
            </div>
          </div>
        </div>
        <div class="field">
          <label class="label">Price</label>
          <div class="control">
            <input 
              @blur="$v.form.price.$touch"
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
              <span 
                v-if="!$v.form.price.minValue"
                class="help is-danger">
                Minimum price is 10
              </span>
            </div>
          </div>
        </div>
        <div class="field">
          <label class="label">Country</label>
          <div class="control">
            <input 
              @blur="$v.form.country.$touch"
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
              @blur="$v.form.city.$touch"
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

        <div class="field">
          <label class="label">Tags - separated by a comma or space</label>
          <div class="control">
            <input 
              @input="handleTags"
              class="input" 
              type="text" 
              placeholder="Programming">
            <div 
              v-for="(tag, index) in form.tags"
              :key="index"
              class="tag is-primary is-medium">
              {{ tag }}
            </div>
          </div>
        </div>

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
import { required, minLength, url, minValue } from 'vuelidate/lib/validators'
import { supportedFileType } from '@/helpers/validators'

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
        url,
        supportedFileType
      },
      price: {
        required,
        minValue: minValue(10)
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
    },
    handleTags(event) {
      const value = event.target.value;
      if(value && value.trim().length > 1 && (value.substr(-1) === ',' || value.substr(-1) === ' ')) {
        this.form.tags.push(value.split(',')[0]);
        event.target.value = '';
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

.tag {
  margin: 6px 3px;
}

.tag:first-of-type {
  margin-left: 0;
}
</style>
