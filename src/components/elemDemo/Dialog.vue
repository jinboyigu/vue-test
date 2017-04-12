<template>
    <div>
      <el-button type="text" @click="dialogVisible = true">打开Dialog对话框</el-button>
      <el-dialog v-model="dialogVisible">
          <span slot="title" class="title">这是一个dialog对话框</span>
          <div title="body">
            <ul>
              <li v-for="(item, index) of dataArray" :key="item.name">
                {{item.name}}
              </li>
            </ul>
          </div>
      </el-dialog>
      <el-button @click="changeArray">修改数组数据</el-button>
    </div>
</template>
<style>
  .title {
  }
</style>
<script>
  export default {
    data () {
      return {
        dialogVisible: false,
        test: false,
        dataArray: [
          {name: '1', text: '这是第一个array'},
          {name: '2', text: '这是第二个array'},
          {name: '3', text: '这是第三个array'},
          {name: '4', text: '这是第四个array'}
        ]
      }
    },
    mounted () {
      let self = this
    },
    methods: {
      beforeOpen () {
        let self = this
        console.log(self.dialogVisible)
        self.test = 'open'
      },
      changeArray () {
        let self = this
        self.dataArray[3] = '5'
      }
    },
    watch: {
      test (val) {
        console.log(val)
      }
    }
  }
</script>
