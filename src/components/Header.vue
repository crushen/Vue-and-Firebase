<template>
  <header 
    class="header" 
    :class=" $route.path === '/' ? '' : 'base-header' ">
    <nav 
      class="navbar"
      :class="$route.path === '/' ? '' : 'with-background'">
      <div class="container">
        <div class="navbar-brand">
          <a 
            @click="alertMessage"
            class="navbar-item has-text-white is-size-2 has-text-weight-bold">
            {{ brandName }}
          </a>
          <span role="button" tabindex="0" class="navbar-burger burger has-text-white" data-target="navbar-menu">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbar-menu" class="navbar-menu">
          <div class="navbar-end">
            <div 
              v-if="isAuthenticated"
              class="navbar-item nav-home">
              {{ user.email }}
            </div>
            <router-link 
              v-for="item in menuItems" 
              :key="item.text"
              :to="item.link"
              class="navbar-item nav-home">{{ item.text }}</router-link>
            <template v-if="!isAuthenticated" >
              <router-link 
                to="/login"
                class="navbar-item nav-home">
                Login
              </router-link>
              <router-link 
                to="/register"
                class="navbar-item nav-home">
                Register
              </router-link>
            </template>
            <template v-else>
              <router-link 
                to="/users/me"
                class="navbar-item nav-home">
                Profile
              </router-link>
              <router-link 
                to="/exchanges/new"
                class="navbar-item nav-home">
                Create Exchange
              </router-link>
              <div
                @click="handleLogout" 
                href="#"
                class="navbar-item nav-home">
                Logout
              </div>
            </template>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  // props: ['brandName', 'menuItems']
  props: {
    brandName: { type: String, required: true },
    menuItems: { type: Array,  required: true}
  },
  computed: {
    user() {
      return this.$store.state.auth.user;
    },
    isAuthenticated() {
      return this.$store.getters['auth/isAuthenticated'];
    }
  },
  methods: {
    alertMessage() {
      alert(this.$route.path);
    },
    handleLogout() {
      this.$toasted.success('You have been logged out!', { duration: 3000 });
      this.$store.dispatch('auth/signOut');
    }
  }
}
</script>