<template>
  <div>    
     <div>
        <mavon-editor ref=md @imgAdd="$imgAdd" @imgDel="$imgDel" value="" v-model="markdown"></mavon-editor>
     </div>
     <div>
        <el-button @click="completed" type="primary">提交</el-button>
     </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      markdown: "",
      value: "",
      defaultData: "preview",
      toolbars: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: true, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true, // 导航目录
        /* 2.1.8 */
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        /* 2.2.1 */
        subfield: true, // 单双栏模式
        preview: true // 预览
      }
    };
  },
  methods: {
    // 绑定@imgAdd event
    $imgAdd(pos, $file) {
      // 第一步.将图片上传到服务器.
      var formdata = new FormData();
      formdata.append("file", $file);
      axios({
        //bluebirds37.top
        url: "http://localhost:37100/file/upload",
        method: "post",
        data: formdata,
        headers: { "Content-Type": "multipart/form-data" },
        baseUrl: "bluebirds37.top:37100"
      }).then(url => {
        // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
        // $vm.$img2Url 详情见本页末尾
        console.info(url);
        var $vm = this.$refs.md;
        $vm.$img2Url(pos, url.data);
      });
    },
    $save(pos, render) {
      console.info(pos);
      console.info(render);
    },
    $imgDel(pos) {
      console.info(pos);
    },
    completed() {
      console.info(this.markdown);
    }
  }
};
</script>

<style scoped lang="stylus">
</style>
