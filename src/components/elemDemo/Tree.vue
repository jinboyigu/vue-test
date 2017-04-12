<template>
  <div>
    <el-tree
     :data="treeData"
     show-checkbox
     node-key="id"
    >
    </el-tree>
  </div>
</template>
<style>
</style>
<script>
  import {commonFetch} from '@/service/fetch'
  export default {
    data () {
      return {
        treeData: [],
        url: '',
        init: {
          method: 'GET',
          headers: {
            'ECMEDM-SID':'A8F975ED32BA469F8FABA0A7A657F043'
          }
        }
      }
    },
    methods: {
      getData () {
        let self = this
        commonFetch(self.url, self.init).then(result => {

        })
      }
    }
  }
</script>
