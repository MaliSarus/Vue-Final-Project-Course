<template>
  <div class="container">
    <Header class="header"></Header>
    <div class="row">
      <div class="col-xs-12">
        <router-view></router-view>
      </div>
    </div>

  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
      Header
  },

}
</script>

<style lang="sass">
  body
    padding: 30px
  .header
    margin-bottom: 30px
</style>
