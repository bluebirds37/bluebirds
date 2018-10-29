import Vue from "vue";
import Router from "vue-router";
import ArticleEdit from "./views/article/ArticleEdit.vue";
import ArticleShow from "./views/article/ArticleShow.vue";
import HomeHeader from "./views/homeHeader/HomeHeader.vue";
import HomeFooter from "./views/homeFooter/HomeFooter.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/articleEdit",
      name: "articleEdit",
      component: ArticleEdit
    },
    {
      path: "/articleShow",
      name: "articleShow",
      component: ArticleShow
    },
    {
      path: "/homeHeader",
      name: "homeHeader",
      component: HomeHeader
    },
    {
      path: "/homeFooter",
      name: "HomeFooter",
      component: HomeFooter
    }
  ]
});
