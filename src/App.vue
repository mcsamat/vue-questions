<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a @click="changeScreen('HomeScreen')" class="nav-link">Home</a>
          </li>
          <li class="nav-item">
            <a @click="changeScreen('AddScreen')" class="nav-link" href="#">Add</a>
          </li>
          <li class="nav-item">
            <a @click="changeScreen('ListScreen')" class="nav-link" href="#">List</a>
          </li>
        </ul>
      </div>

    </div>
  </nav>

  <HomeScreen v-if="currentScreen == 'HomeScreen'"></HomeScreen>
  <AddScreen v-if="currentScreen == 'AddScreen'"></AddScreen>
  <ListScreen v-if="currentScreen == 'ListScreen'"></ListScreen>
</template>

<script>

import HomeScreen from './components/HomeScreen.vue'
import AddScreen from './components/AddScreen.vue'
import ListScreen from './components/ListScreen.vue'

export default {
  name: 'App',
  components: {
    AddScreen,
    HomeScreen,
    ListScreen,
  },
  data() {
    return {
      currentScreen: 'HomeScreen'
    }
  },
  methods: {
    changeScreen(screen) {
      this.currentScreen = screen
    }
  }
}
</script>

