<template>
    <el-row class="tac">
        <el-col :span="24">
            <el-menu
                default-active="3"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
            >
                <el-menu-item index="1">
                    <i class="el-icon-search"></i>
                    <span slot="title">
                        <el-input
                            placeholder="请输入"
                            v-model="search"
                            class="aside-input-search"
                            style="width:100px"
                            clearable
                        ></el-input>
                    </span>
                </el-menu-item>
                <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span slot="title">
                        <router-link to="/articleEdit">ArticleShow</router-link>
                    </span>
                </el-menu-item>
                <el-menu-item index="3">
                    <i class="el-icon-document"></i>
                    <span slot="title">
                        <router-link to="/articleShow">ArticleShow</router-link>
                    </span>
                </el-menu-item>
                <el-menu-item index="4">
                    <i class="el-icon-setting"></i>
                    <span slot="title">
                        <router-link to="/HomeArticleList">HomeArticleList</router-link>
                    </span>
                </el-menu-item>
            </el-menu>
        </el-col>
    </el-row>
</template>



<script>
export default {
  data() {
    return {
      search: "value"
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style>
</style>
