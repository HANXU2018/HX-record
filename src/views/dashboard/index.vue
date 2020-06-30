<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
    <el-card>
      <div slot="header" class="clearfix">
        <span><b>整了的模块</b></span>
      </div>
      <el-timeline :reverse="reverse">
        <el-timeline-item
          v-for="(activity, index) in activities"
          :key="index"
          :timestamp="activity.timestamp">
          {{activity.content}}
        </el-timeline-item>
      </el-timeline>
    </el-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import tcb from 'tcb-js-sdk'
// eslint-disable-next-line no-unused-vars
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
    .collection('DevelopmentProcess').get()
    .then(res => {
      console.log(res.data)
      e.activities = res.data
    })
}

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  data() {
    return {
      reverse: true,
      activities: [{
        content: '学习经历',
        timestamp: '2020-06-28'
      }, {
        content: '考试成绩',
        timestamp: '2020-06-28'
      }, {
        content: '联系方式',
        timestamp: '2020-06-28'
      }]
    }
  },
  mounted() {
    login(this)
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
