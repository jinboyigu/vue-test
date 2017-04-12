<template>
  <div>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-size="10"
      layout="total, prev, pager, next"
      :total="total">
    </el-pagination>
  </div>
</template>
<style>
</style>
<script>
  export default {
    props: {
      page: {
        type: Number,
        default: 0
      },
      total: {
        type: Number,
        default: 100
      }
    },
    computed: {
      currentPage () {
        return this.page + 1
      }
    },
    methods: {
      handleSizeChange (size) {
        let self = this
        self.$emit('size-change', size)
      },
      handleCurrentChange (currentPage) {
        let self = this
        self.$emit('current-change', currentPage)
      }
    }
  }
</script>
