<template>
  <div class="row">
    <nav class="col-12 navbar navbar-expand-lg navbar-light bg-light">
      <router-link to="/" class="navbar-brand">Stock Trader</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <router-link class="nav-item" to="/portfolio" activeClass="active" tag="li"><a class="nav-link">Portfolio</a>
          </router-link>
          <router-link class="nav-item" to="/stocks" activeClass="active" tag="li"><a class="nav-link">Stocks</a>
          </router-link>
        </ul>

        <ul class="nav navbar-nav navbar-right">
          <li class="nav-item"><a class="nav-link" href="#" @click="endDay">End Day</a></li>
          <li class=" nav-item dropdown">
            <a
              href="#"
              class="nav-link dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false">Save & Load <span class="caret"></span>
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li class="dropdown-item">
                <a style="color: #212529" href="#" @click="saveData">Save Data</a>
              </li>
              <li class="dropdown-item">
                <a style="color: #212529" href="#" @click="loadData">Load Data</a>
              </li>
            </ul>
          </li>
        </ul>
        <strong class="navbar-text navbar-right">Funds: {{funds | currency}}</strong>
      </div><!-- /.navbar-collapse -->
    </nav>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'

  export default {
    name: "Header",
    data: function() {
        return {

        }
    },
    computed: {
      funds() {
        return this.$store.getters.funds;
      }
    },
    methods: {
      ...mapActions({
        randomizeStocks: 'randomizeStocks',
        fetchData: 'loadData'
      }),
      endDay() {
        this.randomizeStocks()
      },
      saveData(){
         const data = {
           funds: this.$store.getters.funds,
           stockPortfolio: this.$store.getters.stockPortfolio,
           stocks: this.$store.getters.stocks
         };
         this.$http.put('data.json', data);
      },
      loadData(){
        this.fetchData();
      }
    },
  }
</script>

<style scoped>

</style>
