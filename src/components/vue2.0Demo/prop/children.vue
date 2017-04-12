<template>
  <div>
    <el-button @click="changeNum">点我看看有没有触发</el-button>
    <el-dialog v-model="dialogVisible">
      The Number is {{num}}
    </el-dialog>
    <p>{{msg}}</p>
  </div>
</template>
<style>
</style>
<script>
  export default{
    props: {
      showMsg: [String]
    },
    data () {
      return {
        num: 0,
        dialogVisible: false
      }
    },
    mounted () {
      let self = this
      self.$nextTick(() => {
        self.showMsg = '子组件改了父组件的内容'
      })
    },
    computed: {
      msg () {
        return this.showMsg
      }
    },
    methods: {
      changeNum () {
        let self = this
        self.num ++
        self.dialogVisible = true
        self.$emit('changeNum')
      }
    }
  }
</script>
