<template>
  <div>
    <el-tree
     :data="treeData"
     :show-checkbox="true"
     node-key="email"
    >
    </el-tree>
  </div>
</template>
<style>
</style>
<script>
  import {init, commonFetch} from '@/service/fetch'
  export default {
    data () {
      return {
        treeData: [],
        url: '/ecmedm/rest/v1/recvList/orgUnitList',
        init: {
          method: 'GET'
        }
      }
    },
    mounted () {
      let self = this
      self.getData()
    },
    methods: {
      getData () {
        let self = this
        commonFetch(self.url, init(self.init)).then(result => {
//         处理组织部门
          let orgList = JSON.parse(result.result.data)
          orgList.name = '组织部门'
          self.formatObj(orgList)
          self.treeData.push(orgList)
//          处理邮件列表
          result.result.groupList.forEach(item => {
            item.label = item.name
          })
          let groupList = {
            email: 'groupList',
            label: '邮件列表',
            children: result.result.groupList
          }
          self.treeData.push(groupList)
        }).catch(result => {
          console.log(result)
        })
      },
      formatObj (obj) {
        let self = this
        obj.label = obj.name
        if (obj.hasOwnProperty('ou')) {
          obj.children = obj.ou
          delete obj.ou
          obj.children.forEach(item => {
            self.formatObj(item)
          })
        }
      }
    }
  }
</script>
