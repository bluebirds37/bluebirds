import Vue from "vue";
import Router from "vue-router";
import ArticleEdit from "./views/article/ArticleEdit.vue";
import ArticleShow from "./views/article/ArticleShow.vue";
import HomeHeader from "./components/homeHeader/HomeHeader.vue";
import HomeFooter from "./components/homeFooter/HomeFooter.vue";
import HomeAside from "./components/homeAside/HomeAside.vue";
import HomeArticleList from "./views/article/HomeArticleList.vue";

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
    },
    {
      path: "/homeAside",
      name: "HomeAside",
      component: HomeAside
    },
    {
      path: "/homeArticleList",
      name: "HomeArticleList",
      component: HomeArticleList
    }
  ]
});
