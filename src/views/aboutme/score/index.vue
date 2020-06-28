<template>
  <el-card>
    <el-row>
      <el-col :span="7" class = "score" >
        <el-card >
          3<el-card v-for="course in courses">
            <el-row>
              <el-col :span="7"><span>{{ course.name }}</span></el-col>
              <el-col :span="17"><el-progress :text-inside="true" :stroke-width="16" :percentage="course.number" :format="format" status="status" /></el-col>
            </el-row>
          </el-card>
          <el-card>
            <el-row>
              <el-col :span="5"><span>高等数学</span></el-col>
              <el-col :span="19"><el-progress :text-inside="true" :stroke-width="16" :percentage="99" :format="format" /></el-col>
            </el-row>
          </el-card>
          <el-card>
            <el-row>
              <el-col :span="5"><span>面向对象程序设计</span></el-col>
              <el-col :span="19"><el-progress :text-inside="true" :stroke-width="16" :percentage="100" :format="format" status="success" /></el-col>
            </el-row>
          </el-card>
          <el-card>
            <el-row>
              <el-col :span="5"><span>C语言</span></el-col>
              <el-col :span="19"><el-progress :text-inside="true" :stroke-width="16" :percentage="99" :format="format" status="success" /></el-col>
            </el-row>
          </el-card>
          <el-card>
            <el-row>
              <el-col :span="5"><span>运筹学</span></el-col>
              <el-col :span="19"><el-progress :text-inside="true" :stroke-width="16" :percentage="60" :format="format" status="warning" /></el-col>
            </el-row>
          </el-card>
          <el-card>
            <el-row>
              <el-col :span="5"><span>电路分析</span></el-col>
              <el-col :span="19"><el-progress :text-inside="true" :stroke-width="16" :percentage="50" :format="format" status="exception" /></el-col>
            </el-row>
          </el-card>
          <el-card>
            <el-progress :text-inside="true" :stroke-width="24" :percentage="100" status="success" />
          </el-card>
          <el-card>
            <el-progress :text-inside="true" :stroke-width="22" :percentage="80" status="warning" />
          </el-card>
          <el-card>
            <el-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception" />
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
              <el-timeline-item timestamp="2018/4/12" placement="top">
                <el-card>
                  <h4>更新 Github 模板</h4>
                  <p>王小虎 提交于 2018/4/12 20:46</p>
                </el-card>
              </el-timeline-item>
              <el-timeline-item timestamp="2018/4/3" placement="top">
                <el-card>
                  <h4>更新 Github 模板</h4>
                  <p>王小虎 提交于 2018/4/3 20:46</p>
                </el-card>
              </el-timeline-item>
              <el-timeline-item timestamp="2018/4/2" placement="top">
                <el-card>
                  <h4>更新 Github 模板</h4>
                  <p>王小虎 提交于 2018/4/2 20:46</p>
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
