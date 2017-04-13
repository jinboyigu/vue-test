<template>
  <div>
    <!--<el-button @click="login" :plain="true">获取sid</el-button>-->
    <router-view></router-view>
  </div>
</template>
<script>
  import appService from '@/service/appService'
  import { init, commonFetch } from '@/service/fetch'
  export default {
    data () {
      return {
        url: '/ecmedm/rest/v1/admin/login',
        init: {
          data: {
            username: 'admin@coremail.cn',
            passwd: '123'
          }
        }
      }
    },
    mounted () {
      let self = this
      self.login()
    },
    methods: {
      login () {
        let self = this
        const SID_KEY = appService.cookieObj.SID_KEY
        commonFetch(self.url, init(self.init)).then( result => {
          if (result.code === 0) {
            appService.setCookie(SID_KEY, result.result.sid)
            self.$message(
              {
                message: '获取sid成功',
                type: 'success'
              }
            )
          }
        }).catch( result => {
          console.log('error')
          console.log(result)
        })
      }
    }
  }
</script>
