<template>
  <el-card>
    <div class="block">
      <el-timeline>
        <el-timeline-item
          v-for="(activity, index) in activities"
          :key="index"
          :icon="activity.icon"
          :type="activity.type"
          :color="activity.color"
          :size="activity.size"
          :timestamp="activity.timestamp"
        >

          <el-popover
            placement="right"
            width="400"
            trigger="click"
          >
            <el-table :data="activity.gridData">
              <el-table-column width="140" property="date" label="日期" />
              <el-table-column width="100" property="grade" label="年级" />
              <el-table-column width="120" property="class" label="班级" />
            </el-table>
            <el-button slot="reference" type="text">{{ activity.content }}</el-button>
          </el-popover>
        </el-timeline-item>
      </el-timeline>
    </div>

  </el-card>
</template>

<script>

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
    .collection('studyexperience').get()
    .then(res => {
      console.log(res.data)
      e.activities = res.data
    })
}
export default {
  name: 'Index',
  data() {
    return {
      activities: [{
        content: '河北大学',
        timestamp: '2018-09 ~ now',
        size: 'normal',
        type: 'primary',
        icon: 'el-icon-loading',
        gridData: [
          { date: '2018/09~2019/06',
            grade: '大学一年级',
            class: '18计算机类3班' },
          {
            date: '2019/09~2029/06',
            grade: '大学二年级',
            class: '18信息安全2班'
          }

        ]
      },
      {
        content: '定兴三中',
        timestamp: '2015-09 ~ 2018-06',
        size: 'normal',
        type: 'primary',
        icon: 'el-icon-circle-check',
        gridData: [
          { date: '2015/09~2016/01',
            grade: '高中一年级',
            class: '高一 2班'
          },
          {
            date: '2016/01~2016/06',
            grade: '高中一年级',
            class: '高一理科16班'
          },
          {
            date: '2016/07~2017/06',
            grade: '高中二年级',
            class: '理科高二3班'
          },
          {
            date: '2017/06~2018/06',
            grade: '高中三年级',
            class: '理科高三3班'
          }
        ]
      },
      {
        content: '固城中学',
        timestamp: '2012-09 ~ 2015-06',
        size: 'normal',
        type: 'primary',
        icon: 'el-icon-circle-check',
        gridData: [
          { date: '2012/09~2013/06',
            grade: '初中一年级',
            class: '97班'
          },
          { date: '2013/09~2014/06',
            grade: '初中二年级',
            class: '97班'
          },
          { date: '2014/09~2015/06',
            grade: '初中三年级',
            class: '97班'
          }

        ]
      },
      {
        content: '固城中心小学',
        timestamp: '2009-09 ~ 2012-06',
        size: 'normal',
        type: 'primary',
        icon: 'el-icon-circle-check',
        gridData: [
          { date: '2009/09~2010/06',
            grade: '小学四年级',
            class: '四（3）班'
          },
          { date: '2010/09~2011/06',
            grade: '小学五年级',
            class: '五（3）班'
          },
          { date: '2011/09~2012/06',
            grade: '小学六年级',
            class: '六（3）班'
          }
        ]
      },
      {
        content: '国兴小学',
        timestamp: '2007-09 ~ 2009-06',
        size: 'normal',
        type: 'primary',
        icon: 'el-icon-circle-check',
        gridData: [
          { date: '2007/09~2008/06',
            grade: '小学一年级',
            class: '一（2）班'
          },
          { date: '2008/09~2009/06',
            grade: '小学二年级',
            class: '二（2）班'
          }
        ]
      },
      {
        content: '三街小学幼儿园',
        timestamp: '2006-09 ~ 2007-06',
        size: 'normal',
        type: 'primary',
        icon: 'el-icon-circle-check',
        gridData: [
          { date: '2006/09~2007/06',
            grade: '幼儿园',
            class: '幼儿班'
          }
        ]
      }
      ]
    }
  },
  mounted() {
    login(this)
  }
}
</script>
<style scoped>

</style>
