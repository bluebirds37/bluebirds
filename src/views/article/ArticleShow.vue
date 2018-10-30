<template>
  <div>
    <mavon-editor
      v-model="markdown"
      :subfield="false"
      :defaultOpen="defaultData"
      :toolbarsFlag="false"
      :boxShadow="false"
      @change="changeData"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      markdown: " ``` function()  ``` ",
      defaultData: "preview"
    };
  },
  methods: {
    changeData(value, render) {
      console.log(render);
    }
  }
};
</script>
