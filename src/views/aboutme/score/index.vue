<template>
  <el-card>
    <el-row>
      <el-col :span="7" class = "score" >
        <el-card >
          <div slot="header" class="clearfix">
            <span><b>成绩档案</b></span>
          </div>
          <el-card v-for="course in courses">
            <el-row>
              <el-col :span="7"><span>{{ course.name }}</span></el-col>
              <el-col :span="17"><el-progress :text-inside="true" :stroke-width="16" :percentage="course.number" :format="format" status="status" /></el-col>
            </el-row>
          </el-card>
        </el-card>
      </el-col>
      <el-col :span="17">
        <el-card>
          <div slot="header" class="clearfix">
            <span><b>学习记录</b></span>
          </div>
          <div class="block">
            <el-timeline>
              <el-timeline-item
                v-for="(activity, index) in activities"
                :key="index"
                :timestamp="activity.timestamp"
                placement="top">
                <el-card>
                  <h4>{{activity.semester}}</h4>
                  <p>{{activity.content}}</p>
                </el-card>
              </el-timeline-item>
            </el-timeline>
          </div>
        </el-card>
      </el-col>
    </el-row>

  </el-card>
</template>

<script>
export default {
  name: 'Index',
  data: function() {
    return {
      courses: [
        { name: '高等数学', number: 100 },
        { name: '高等', number: 91 },
        { name: '数学', number: 62 },
        { name: '高数学', number: 53 },
        { name: '等数学', number: 84 }
      ],
      activities: [
        { timestamp: '2018/09-2019-01', content: '高等数学 线性代数 计算机导论 大学英语一 大学体育一 大学语文 军事理论', semester: '大一上学期' },
        { timestamp: '2018/09-2019-01', content: '高等数学 线性代数 计算机导论 大学英语一 大学体育一 大学语文 军事理论', semester: '大一上学期' },
        { timestamp: '2018/09-2019-01', content: '高等数学 线性代数 计算机导论 大学英语一 大学体育一 大学语文 军事理论', semester: '大一上学期' },
        { timestamp: '2018/09-2019-01', content: '高等数学 线性代数 计算机导论 大学英语一 大学体育一 大学语文 军事理论', semester: '大一上学期' }
      ]
    }
  },
  methods: {
    format(percentage) {
      console.log(percentage)
      if (percentage === 100) {
        return '满分100|【绩点5.0】'
      } else if (percentage >= 95) {
        return `${percentage}分【绩点5.0】`
      } else if (percentage >= 60) {
        return `${percentage}分|【绩点${(percentage - 45) / 10}】`
      } else {
        return `${percentage}分|【需重修】`
      }
    },
    status() {
      return '"success"'
    }
    // eslint-disable-next-line vue/no-dupe-keys
  //   status(percentage) {
  //     // eslint-disable-next-line no-unreachable
  //     if (percentage < 60) {
  //       return 'exception'
  //     } else if (percentage <= 75) {
  //       return 'warning'
  //     } else if (percentage >= 95) {
  //       return 'success'
  //     } else {
  //       return ''
  //     }
  //   }
  }
}
</script>

<style scoped>
  /*.text {*/
  /*  font-size: 14px;*/
  /*}*/

  .item {
    padding: 10px 0;
  }

  .score {
    padding-right: 15px;
  }
  /*.box-card {*/
  /*  width: 380px;*/
  /*}*/
</style>
