<template>
  <div id="app" class="container">
    <nav class="navbar navbar-expand-sm bg-light">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="search"
          class="nav-item nav-link"
          active-class="active"
          exact>Search Movies</router-link>
        </li>
        <li class="nav-item">
          <router-link to="add"
          class="nav-item nav-link"
          active-class="active"
          exact>Add Movies</router-link>
        </li>
        <li class="nav-item">
          <router-link to="index"
          class="nav-item nav-link"
          active-class="active"
          exact> All Movies</router-link>
        </li>
      </ul>
    </nav>
    <div class="gap">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="css">
  @import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
</style>
<script src="https://unpkg.com/vue@2.5.17/dist/vue.min.js"></script>
<style>
  .gap {
    margin-top: 50px;
  }
</style>
