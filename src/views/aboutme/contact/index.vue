<template>
  <el-card>
    <div slot="header" class="clearfix">
      <span>联系方式</span>
    </div>
    <el-collapse v-model="activeNames">
      <el-collapse-item v-for="(contact, index) in contacts" :title="contact.name" :name="index+1">
        <i class="el-icon-s-promotion"  style="font-size:25px"  @click="goto(contact.url)">{{contact.name}}</i>
        <p>{{contact.contant}}</p>
      </el-collapse-item>
    </el-collapse>
  </el-card>

</template>
<style>

</style>

<script>
export default {
  data() {
    return {
      activeNames: ['1'],
      contacts: [
        { name: 'CSDN', url: 'https://hanxu.blog.csdn.net', contant: 'CSDN 记录日常笔记经常使用' },
        { name: 'Github', url: 'https://github.com/HANXU2018', contant: 'github 代码仓库记录了 我的每天并不辛勤的劳动' },
        { name: '博客园', url: 'https://www.cnblogs.com/hx97/', contant: '最早的博客很少更新了' },
        { name: '邮箱', url: '1076998404@qq.com', contant: '1076998404@qq.com 有问题可以随时邮件联系 我会尽快回复' },
        { name: 'HanXuBlog', url: 'http://blog.hanxu51.com', contant: '数据库课程设计写的 springboot 博客' },
        { name: '牛客网', url: 'https://blog.nowcoder.net/hanxu', contant: '坚持使用希望早日拿到 offer 哈哈' },
        { name: 'LeetCode', url: 'https://leetcode-cn.com/u/han-xu-2/', contant: '希望我能坚持每日一题虽然一直断签' }
      ]
    }
  },
  methods: {
    handleChange(val) {
      console.log(val)
    },
    goto(url) {
      window.location.href = url
    }
  }
}
</script>
