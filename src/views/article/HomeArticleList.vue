<template>
  <div>
    <div>
      <home-carousel></home-carousel>
    </div>
    <div>
      <el-table :data="articleList" style="width: 100%" :row-class-name="tableRowClassName">
        <el-table-column prop="date" label="" width="180"></el-table-column>
        <el-table-column align="right" prop="address" label="地址"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<style>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>

<script>
import HomeCarousel from "../../components/HomeCarousel/HomeCarousel";
export default {
  created() {
    this.findArticleList();
  },
  methods: {
    findArticleList() {
      alert(1);
    },
    tableRowClassName({ row, rowIndex }) {
      console.info(row);
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    }
  },
  components: {
    HomeCarousel
  },
  data() {
    return {
      articleList: [
        {
          date: "2016-05-02",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-03",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ]
    };
  }
};
</script>
