<template>
  <div>
    <children
      @changeNum="parenEmitChild"
      :show-msg="propMsg"
    ></children>
    <div id="element"></div>
  </div>
</template>
<style>
</style>
<script>
  import children from './children.vue'
  import Vue from 'vue'
  export default {
    data () {
      return {
        propMsg: '这是父组件传递的信息'
      }
    },
    created () {
      let self = this
      self.$on('test-event', self.testMethod)
    },
    mounted () {
      this.$emit('test-event')
      new Vue ({
        el: '#element',
        render (createElement) {
          return createElement('div', {class: {foo: true}})
        }
      })
    },
    render (createElement) {
      console.log('render')
      return createElement('123')
    },
    components: {
      children
    },
    methods: {
      parenEmitChild () {
        console.log('this is emit')
      },
      testMethod () {
        console.log('testMehod')
      }
    }
  }

</script>
