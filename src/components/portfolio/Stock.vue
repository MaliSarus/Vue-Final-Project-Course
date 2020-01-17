<template>
  <div class="col-sm-6 col-md-6 col-lg-4">
    <div class="card mb-4">
      <div class="card-header bg-info">
        <b>{{stock.name}}</b>
        <small>(Price: {{stock.price}} | Quantity: {{stock.quantity}})</small>
      </div>
      <div class="card-body">
        <div class="float-left">
          <input
            class="form-control"
            placeholder="Quantity"
            v-model="quantity"
            :class="{
              danger: wrongQuantity
            }"
          >
        </div>
        <div class="float-right">
          <button
            class="btn btn-danger"
            @click="sellStock"
            :disabled="wrongQuantity || quantity <= 0 || !(Number.isInteger(Math.round(quantity)))"
          >{{wrongQuantity ? 'You can\'t' : 'Sell'}}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
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
    methods: {
      ...mapActions({
        sellOrder: 'sellStock'
      }),
      sellStock(){
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity
        };
        this.sellOrder(order);
        this.quantity = 0;

      }
    },
    computed:{
      wrongQuantity(){
        return this.quantity > this.stock.quantity;
      }
    }
  }
</script>

<style lang="sass" scoped>
  .danger
    background-color: lighten(red, 30)
</style>
