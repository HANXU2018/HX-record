<template>
  <el-card>
    <el-carousel :interval="4000" type="card" height="500px">
      <el-carousel-item v-for="item in 6" :key="item">
        <el-alert
          title="没有获过奖"
          type="warning"
          description="我枯了 你呢？"
          show-icon>
        </el-alert>
        <el-image src="http://dufyun.gitee.io/images_bed/img/portfolio/11-large.jpg"></el-image>
        <el-alert
          title="没有获过奖"
          type="warning"
          description="我枯了 你呢？"
          show-icon>
        </el-alert>

        <el-tag type="danger">标签五</el-tag>
        <h3 class="medium">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </el-card>
</template>
<script>
export default {
  name: 'Index'
}
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
