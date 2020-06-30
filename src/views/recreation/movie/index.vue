<template>
  <el-card>
    <el-row>
      <el-col v-for="(o, index) in 100" :key="o" :span="3" :offset="index > 0 ? 1 : 1">
        <el-card :body-style="{ padding: '0px' }">
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
          <div style="padding: 14px;">
            <span>好吃的汉堡</span>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
import tcb from 'tcb-js-sdk'
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
    .collection('集合').get()
    .then(res => {
      console.log(res.data)
      e.currentDate = res.data
    })
}

export default {
  name: 'Index',
  data() {
    return {
      currentDate: '123'
    }
  },
  methods: {
  },
  mounted() {
    login(this)
  }
}
</script>

<style scoped>
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>
