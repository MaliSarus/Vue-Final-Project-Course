<template>
  <div class="row">
    <Stock v-for="stock in stocks" :key="stock.id" :stock="stock"></Stock>
  </div>
</template>

<script>
  import Stock from "./Stock";
  import {mapGetters} from 'vuex'

  export default {
    name: "Portfolio",
    components: {
      Stock
    },
    computed:{
      ...mapGetters({
        stocks: 'stockPortfolio'
      })
    }
  }
</script>

<style scoped>

</style>
