<template>
  <el-card>
    <el-row>
      <el-col :span="24" class = "score" >
        <el-card >
          <div slot="header" class="clearfix">
            <span><b>成绩档案</b></span>
          </div>
          <el-card v-for="course in courses">
            <el-row>
              <el-col :span="9"><span>{{ course.name }}</span></el-col>
              <el-col :span="15"><el-progress :text-inside="true" :stroke-width="19" :percentage="course.number" :format="format" v-bind:status="statu(course.number)" /></el-col>
            </el-row>
          </el-card>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
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
        { name: '大学英语1', number: 96 },
        { name: '大学英语2', number: 90 },
        { name: '大学英语3', number: 80 },
        { name: '大学英语4', number: 70 },
        { name: '大学英语5', number: 60 },
        { name: '大学英语6', number: 50 },
        { name: '高等数学', number: 55 },
        { name: '大学英语1', number: 66 },
        { name: '大学英语2', number: 80 },
        { name: '大学英语3', number: 90 },
        { name: '大学英语4', number: 92 },
        { name: '大学英语5', number: 95 },
        { name: '大学英语6', number: 100 }
      ],
      activities: [
        { timestamp: '2018/09-2019-01', content: '高等数学 线性代数 计算机导论 大学英语一 大学体育一 大学语文 军事理论', semester: '大一上学期' },
        { timestamp: '2018/09-2019-01', content: '高等数学 线性代数 计算机导论 大学英语一 大学体育一 大学语文 军事理论', semester: '大一上学期' },
        { timestamp: '2018/09-2019-01', content: '高等数学 线性代数 计算机导论 大学英语一 大学体育一 大学语文 军事理论', semester: '大一上学期' },
        { timestamp: '2018/09-2019-01', content: '高等数学 线性代数 计算机导论 大学英语一 大学体育一 大学语文 军事理论', semester: '大一上学期' },
        { timestamp: '2018/09-2019-01', content: '高等数学 线性代数 计算机导论 大学英语一 大学体育一 大学语文 军事理论', semester: '大一上学期' },
        { timestamp: '2018/09-2019-01', content: '高等数学 线性代数 计算机导论 大学英语一 大学体育一 大学语文 军事理论', semester: '大一上学期' },
        { timestamp: '2018/09-2019-01', content: '高等数学 线性代数 计算机导论 大学英语一 大学体育一 大学语文 军事理论', semester: '大一上学期' },
        { timestamp: '2018/09-2019-01', content: '高等数学 线性代数 计算机导论 大学英语一 大学体育一 大学语文 军事理论', semester: '大一上学期' },
        { timestamp: '2018/09-2019-01', content: '高等数学 线性代数 计算机导论 大学英语一 大学体育一 大学语文 军事理论', semester: '大一上学期' },
        { timestamp: '2018/09-2019-01', content: '高等数学 线性代数 计算机导论 大学英语一 大学体育一 大学语文 军事理论', semester: '大一上学期' },
        { timestamp: '2018/09-2019-01', content: '高等数学 线性代数 计算机导论 大学英语一 大学体育一 大学语文 军事理论', semester: '大一上学期' },
        { timestamp: '2018/09-2019-01', content: '高等数学 线性代数 计算机导论 大学英语一 大学体育一 大学语文 军事理论', semester: '大一上学期' },
        { timestamp: '2018/09-2019-01', content: '高等数学 线性代数 计算机导论 大学英语一 大学体育一 大学语文 军事理论', semester: '大一上学期' },
        { timestamp: '2018/09-2019-01', content: '高等数学 线性代数 计算机导论 大学英语一 大学体育一 大学语文 军事理论', semester: '大一上学期' },
        { timestamp: '2018/09-2019-01', content: '高等数学 线性代数 计算机导论 大学英语一 大学体育一 大学语文 军事理论', semester: '大一上学期' },
        { timestamp: '2018/09-2019-01', content: '高等数学 线性代数 计算机导论 大学英语一 大学体育一 大学语文 军事理论', semester: '大一上学期' },
        { timestamp: '2018/09-2019-01', content: '高等数学 线性代数 计算机导论 大学英语一 大学体育一 大学语文 军事理论', semester: '大一上学期' },
        { timestamp: '2018/09-2019-01', content: '高等数学 线性代数 计算机导论 大学英语一 大学体育一 大学语文 军事理论', semester: '大一上学期' },
        { timestamp: '2018/09-2019-01', content: '高等数学 线性代数 计算机导论 大学英语一 大学体育一 大学语文 军事理论', semester: '大一上学期' },
        { timestamp: '2018/09-2019-01', content: '高等数学 线性代数 计算机导论 大学英语一 大学体育一 大学语文 军事理论', semester: '大一上学期' },
        { timestamp: '2018/09-2019-01', content: '高等数学 线性代数 计算机导论 大学英语一 大学体育一 大学语文 军事理论', semester: '大一上学期' },
        { timestamp: '2018/09-2019-01', content: '高等数学 线性代数 计算机导论 大学英语一 大学体育一 大学语文 军事理论', semester: '大一上学期' },
        { timestamp: '2018/09-2019-01', content: '高等数学 线性代数 计算机导论 大学英语一 大学体育一 大学语文 军事理论', semester: '大一上学期' },
        { timestamp: '2018/09-2019-01', content: '高等数学 线性代数 计算机导论 大学英语一 大学体育一 大学语文 军事理论', semester: '大一上学期' },
        { timestamp: '2018/09-2019-01', content: '高等数学 线性代数 计算机导论 大学英语一 大学体育一 大学语文 军事理论', semester: '大一上学期' },
        { timestamp: '2018/09-2019-01', content: '高等数学 线性代数 计算机导论 大学英语一 大学体育一 大学语文 军事理论', semester: '大一上学期' },
        { timestamp: '2018/09-2019-01', content: '高等数学 线性代数 计算机导论 大学英语一 大学体育一 大学语文 军事理论', semester: '大一上学期' },
        { timestamp: '2018/09-2019-01', content: '高等数学 线性代数 计算机导论 大学英语一 大学体育一 大学语文 军事理论', semester: '大一上学期' },
        { timestamp: '2018/09-2019-01', content: '高等数学 线性代数 计算机导论 大学英语一 大学体育一 大学语文 军事理论', semester: '大一上学期' },
        { timestamp: '2018/09-2019-01', content: '高等数学 线性代数 计算机导论 大学英语一 大学体育一 大学语文 军事理论', semester: '大一上学期' },
        { timestamp: '2018/09-2019-01', content: '高等数学 线性代数 计算机导论 大学英语一 大学体育一 大学语文 军事理论', semester: '大一上学期' }
      ]
    }
  },
  methods: {
    format(percentage) {
      // console.log(percentage)
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

    statu(percentage) {
      console.log(percentage)
      if (percentage < 60) {
        return 'exception'
      } else if (percentage <= 75) {
        return 'warning'
      } else if (percentage >= 95) {
        return 'success'
      } else {
        return ''
      }
    }
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
