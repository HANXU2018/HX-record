<template>
  <el-card>
    <el-tabs type="border-card">
      <el-tab-pane v-for="even in events">
        <span slot="label"><i :class="even.icon"></i> {{even.content}}</span>
        <el-timeline :reverse="reverse">
          <el-timeline-item
            v-for="(e, index) in even.things"
            :key="index"
            :icon="e.icon"
            color="#409EFF"
            :timestamp="e.timestamp">
            {{e.content}}
          </el-timeline-item>
        </el-timeline>
      </el-tab-pane>
      <el-tab-pane label="消息中心">
        消息中心
      </el-tab-pane>
      <el-tab-pane label="角色管理">
        角色管理
      </el-tab-pane>
      <el-tab-pane label="定时任务补偿">
        定时任务补偿
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
export default {
  name: 'Index',
  data: function() {
    return {
      events: [
        {
          content: '河北大学',
          timestamp: '2018-09 ~ now',
          size: 'normal',
          type: 'primary',
          icon: 'el-icon-loading',
          things: [
            {
              content: '河北大学',
              timestamp: '2018-09 ~ now',
              size: 'normal',
              type: 'primary',
              icon: 'el-icon-loading'
            },
            {
              content: '河北大学',
              timestamp: '2018-09 ~ now',
              size: 'normal',
              type: 'primary',
              icon: 'el-icon-loading'
            },
            {
              content: '河北大学',
              timestamp: '2018-09 ~ now',
              size: 'normal',
              type: 'primary',
              icon: 'el-icon-loading'
            }
          ]
        },
        {
          content: '河北大学',
          timestamp: '2018-09 ~ now',
          size: 'normal',
          type: 'primary',
          icon: 'el-icon-loading',
          things: [
            {
              content: '河北大学',
              timestamp: '2018-09 ~ now',
              size: 'normal',
              type: 'primary',
              icon: 'el-icon-loading'
            },
            {
              content: '河北大学',
              timestamp: '2018-09 ~ now',
              size: 'normal',
              type: 'primary',
              icon: 'el-icon-loading'
            },
            {
              content: '河北大学',
              timestamp: '2018-09 ~ now',
              size: 'normal',
              type: 'primary',
              icon: 'el-icon-loading'
            }
          ]
        },
        {
          content: '河北大学',
          timestamp: '2018-09 ~ now',
          size: 'normal',
          type: 'primary',
          icon: 'el-icon-loading',
          things: [
            {
              content: '河北大学',
              timestamp: '2018-09 ~ now',
              size: 'normal',
              type: 'primary',
              icon: 'el-icon-loading'
            },
            {
              content: '河北大学',
              timestamp: '2018-09 ~ now',
              size: 'normal',
              type: 'primary',
              icon: 'el-icon-loading'
            },
            {
              content: '河北大学',
              timestamp: '2018-09 ~ now',
              size: 'normal',
              type: 'primary',
              icon: 'el-icon-loading'
            }
          ]
        },
        {
          content: '河北大学',
          timestamp: '2018-09 ~ now',
          size: 'normal',
          type: 'primary',
          icon: 'el-icon-loading',
          things: [
            {
              content: '河北大学',
              timestamp: '2018-09 ~ now',
              size: 'normal',
              type: 'primary',
              icon: 'el-icon-loading'
            },
            {
              content: '河北大学',
              timestamp: '2018-09 ~ now',
              size: 'normal',
              type: 'primary',
              icon: 'el-icon-loading'
            },
            {
              content: '河北大学',
              timestamp: '2018-09 ~ now',
              size: 'normal',
              type: 'primary',
              icon: 'el-icon-loading'
            }
          ]
        },
        {
          content: '河北大学',
          timestamp: '2018-09 ~ now',
          size: 'normal',
          type: 'primary',
          icon: 'el-icon-loading',
          things: [
            {
              content: '河北大学',
              timestamp: '2018-09 ~ now',
              size: 'normal',
              type: 'primary',
              icon: 'el-icon-loading'
            },
            {
              content: '河北大学',
              timestamp: '2018-09 ~ now',
              size: 'normal',
              type: 'primary',
              icon: 'el-icon-loading'
            },
            {
              content: '河北大学',
              timestamp: '2018-09 ~ now',
              size: 'normal',
              type: 'primary',
              icon: 'el-icon-loading'
            }
          ]
        },
        {
          content: '河北大学',
          timestamp: '2018-09 ~ now',
          size: 'normal',
          type: 'primary',
          icon: 'el-icon-loading'
        },
        {
          content: '河北大学',
          timestamp: '2018-09 ~ now',
          size: 'normal',
          type: 'primary',
          icon: 'el-icon-loading'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
