<template>
  <div id="app">
    <el-container>
        <el-header>
          <app-header></app-header>
        </el-header>
        <el-container>
          <el-aside>
            <div id="nav">
              <router-link to="/articleEdit">ArticleShow</router-link>
              <br> 
              <router-link to="/articleShow">ArticleShow</router-link>
            </div>
          </el-aside>
          <el-main>
            <router-view/>
          </el-main>
        </el-container>
      <el-footer><app-footer></app-footer></el-footer>
      </el-container>
  </div>
</template>
<script>
import AppHeader from "./components/homeHeader/HomeHeader.vue";
import AppFooter from "./components/homeFooter/HomeFooter.vue";
export default {
  components: {
    AppHeader,
    AppFooter
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
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
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
