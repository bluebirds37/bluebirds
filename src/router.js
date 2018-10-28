import Vue from "vue";
import Router from "vue-router";
import ArticleEdit from "./components/article/ArticleEdit.vue";
import ArticleShow from "./components/article/ArticleShow.vue";

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
    }
  ]
});
