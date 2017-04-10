<template>
    <div>
      <div>{{msgBeforeCreate}}</div>
      <div>{{msgCreated}}</div>
      <input type="text" v-model="msg"/>
      <!--<div id="template">12312</div>-->
    </div>
</template>
<style>
</style>
<script>
  export default{
    template: '#template',
    render (createElement) {
      return createElement('ul', {}, [createElement('h1', 'hello world')])
    },
    beforeCreate: function () {
      this.msgBeforeCreate = 'beforeCreate is build'
    },
    events: {
      initEvent: function () {
        console.log('initEvent')
      }
    },
    data: function () {
      let self = this
      return {
        msg: '生命周期'
      }
    },
    created: function () {
      this.msgCreated = 'Created is build'
    }
  }
</script>
