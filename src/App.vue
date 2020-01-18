<template>
  <div class="container">
    <Header class="header"></Header>
    <div class="row">
      <div class="col-12">
        <transition
          enter-class=""
          enter-active-class="animated fadeIn"
          leave-class=""
          leave-active-class="animated fadeOut"
          mode="out-in"
        >
          <router-view></router-view>
        </transition>

      </div>
    </div>

  </div>
</template>

<script>
  import Header from "./components/Header";

  export default {
    name: 'app',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      Header
    },
    created() {
      this.$store.dispatch('initStocks')
    }
  }
</script>

<style lang="sass">
  body
    padding: 30px
    .header
      margin-bottom: 30px

  .animated
    animation-duration: .5s
</style>
