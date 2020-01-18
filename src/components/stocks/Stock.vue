<template>
  <div class="col-sm-6 col-md-6 col-lg-4">
    <div class="card mb-4">
      <div class="card-header bg-success">
        <b>{{stock.name}}</b>
        <small>(Price: {{stock.price}})</small>
      </div>
      <div class="card-body">
        <div class="float-left">
          <input
            class="form-control"
            placeholder="Quantity"
            v-model="quantity"
            :class="{
              danger: wrongFunds
            }"
          >
        </div>
        <div class="float-right">
          <button
            class="btn btn-success"
            @click="buyStock"
            :disabled="wrongFunds || quantity <= 0 || !(Number.isInteger(Math.round(quantity)))"
          >{{wrongFunds ? 'You can\'t' : 'Buy'}}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Stock",
    data: function () {
      return {
        quantity: 0
      }
    },
    props: [
      'stock'
    ],
    computed: {
      funds() {
        return this.$store.getters.funds;
      },
      wrongFunds() {
        return this.quantity * this.stock.price > this.funds;
      }
    },
    methods: {
      buyStock() {
        this.quantity = Math.round(this.quantity);
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity
        };
        this.$store.dispatch('buyStock', order);
        this.quantity = 0;
      }
    },
  }
</script>

<style lang="sass" scoped>
 .danger
   background-color: lighten(red, 30)
</style>
