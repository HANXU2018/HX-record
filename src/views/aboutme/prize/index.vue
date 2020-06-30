<template>
  <el-card>
    <el-carousel :interval="4000" type="card" height="500px">
      <el-carousel-item v-for="(item,i) in prizes" :key="i">
        <el-alert
          title="没有获过奖"
          type="warning"
          description="我枯了 你呢？"
          show-icon
        />
        <el-image :src="item.imgurl" />
        <el-alert
          title="没有获过奖"
          type="warning"
          description="我枯了 你呢？"
          show-icon
        />

        <el-tag type="danger">标签五</el-tag>
        <h3 class="medium">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </el-card>
</template>
<script>
import tcb from 'tcb-js-sdk'
// eslint-disable-next-line no-unused-vars
function geturl(e, cloud, i) {
  // eslint-disable-next-line no-undef
  const app = tcb.init({
    env: 'env-jpzsehqt'
  })// 云开发
  return new Promise((reslove, reject) => {
    app.getTempFileURL({
      fileList: [
        cloud
      ]
    }).then((res) => {
      // fileList 是一个有如下结构的对象数组
      // [{
      //    fileID: 'cloud://webtestjimmy-5328c3.7765-webtestjimmy-5328c3-1251059088/腾讯云.png', // 文件 ID
      //    tempFileURL: '', // 临时文件网络链接
      //    maxAge: 120 * 60 * 1000, // 有效期
      // }]
      console.log(res.fileList[0].tempFileURL)
      reslove(res.fileList[0].tempFileURL)
    })
  })
}

function login(e) {
  const app = tcb.init({
    env: 'env-jpzsehqt'
  })// 云开发
  app
    .auth({
      persistence: 'session'
    })
    .anonymousAuthProvider()
    .signIn()
    .then(() => {
      // 登录成功
    })
  // eslint-disable-next-line handle-callback-err
    .catch(err => {
      // 登录失败
    })
    // 1. 获取数据库引用

  app
    .database()
    .collection('prize').get()
    .then(res => {
      e.prizes = res.data
      e.prizes.forEach(item => {
        geturl(e, item.imgurl)
          .then(res => {
            item.imgurl = res
          })
      })
    })
}
export default {
  name: 'Index',
  data() {
    return {
      prizes: []
    }
  },
  mounted() {
    login(this)
  },
  methods: {

  }
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
