<template>
  <div id="app">
    <el-container>
      <el-header>
        <app-header></app-header>
      </el-header>
      <el-container>
        <el-aside height="auto" width="auto">
          <app-aside></app-aside>
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
      <el-footer>
        <app-footer></app-footer>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
import AppHeader from "./components/homeHeader/HomeHeader.vue";
import AppFooter from "./components/homeFooter/HomeFooter.vue";
import AppAside from "./components/homeAside/HomeAside.vue";

export default {
  data() {
    return {
      search: "",
      collapseBtnClick: false
    };
  },
  components: {
    AppHeader,
    AppFooter,
    AppAside
  }
};
</script>


<style lang="stylus">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.el-header, .el-footer {
  background-color: #FFFFFF;
  color: #FFFFFF;
  text-align: center;
  line-height: 80px;
}

.el-aside {
  background-color: #FFFFFF;
  color: #FFFFFF;
  text-align: center;
  line-height: 120px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 250px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside, .el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
