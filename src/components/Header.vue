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
        <strong class="navbar-text navbar-right"></strong>
        <ul class="nav navbar-nav navbar-right">
          <li class="nav-item"><a class="nav-link" href="#">End Day</a></li>
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
              <li class="dropdown-item"><a style="color: #212529" href="#">Save Data</a></li>
              <li class="dropdown-item"><a style="color: #212529" href="#">Load Data</a></li>
            </ul>
          </li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </nav>
  </div>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped>

</style>
