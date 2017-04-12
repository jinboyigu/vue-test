<template>
    <div>
      <el-button @click="visible = true" type="primary">{{btnMsg}}</el-button>
      <el-dialog v-model="visible" title="Hello World">
        <p>欢迎使用Element</p>
      </el-dialog>
    </div>
</template>
<style>
</style>
<script>
  export default {
    data: function () {
      return {
        visible: false,
        btnMsg: '按钮'
      }
    }
  }
</script>
