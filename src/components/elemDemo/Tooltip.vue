<template>
  <div>
    <el-tooltip content="tooltipMsg" :value="toolTipShow === '123'" :manual="true">
      <div slot="content">这是标题</div>
      <el-button @click="toolTipShow = '123'">按钮</el-button>
    </el-tooltip>
  </div>
</template>
<style>
</style>
<script>
  export default {
    data () {
      return {
        toolTipShow: true
      }
    }
  }
</script>
