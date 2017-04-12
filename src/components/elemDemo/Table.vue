<template>
  <div style="margin-top: 10px;">
    <div class="table-header clearfix">
      <div class="fr">
        <el-input placeholder="请输入要搜索的内容" class="search-input" v-model="params.tabledesc" :on-icon-click="search" icon="search" @keyup.native.enter="search">
          <!--<el-button slot="append" icon="search" @click="search()"></el-button>-->
        </el-input>
      </div>
    </div>
    <div class="table-body">
      <el-table :data="tableData" @sort-change="handleSortChange">
        <el-table-column type="expand">
          <template scope="scope">
            <span>群组名称：{{scope.row.tabledesc}}</span>
            <span>收件人数量：{{scope.row.size}}</span>
            <span>创建人：{{scope.row.creator}}</span>
          </template>
        </el-table-column>
        <el-table-column
          v-for="header in tableHeader"
          :key="header.prop"
          :prop="header.prop"
          :label="header.label"
          :formatter="header.formatter"
          :sortable="header.sortable"
          align="left"
        ></el-table-column>
      </el-table>
    </div>
    <div class="table-foot clearfix">
      <div class="fl">
        <div class="table-total">共 {{params.total}} 项</div>
      </div>
      <div class="fr">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="params.page + 1"
          :page-size="params.size"
          layout="prev, pager, next"
          :total="params.total">
        </el-pagination>
        <!--<el-button-group v-if="params.total !== 0">-->
          <!--<el-button type="primary" icon="arrow-left" @click="changeTableData('prev')" :disabled="prevDisabled">上一页</el-button>-->
          <!--<el-button type="primary" @click="changeTableData('next')" :disabled="nextDisabled">下一页<i class="el-icon-arrow-right"></i></el-button>-->
        <!--</el-button-group>-->
      </div>
    </div>
  </div>
</template>
<style lang="less">
  @import "../../style/table.less";
</style>
<script>
  import {commonFetch} from '@/service/fetch'
  import appFunc from '@/service/appFunc'
  import Vue from 'vue'
  export default {
    props: {
      header: {
        type: Array
      },
      targetURL: {
        type: String
      }
    },
    data () {
      let self = this
      return {
        tableHeader: self.header || [
          {prop: 'tabledesc', label: '群组名称', sortable: 'custom'},
          {prop: 'size', label: '收件人数量'},
          {prop: 'creator', label: '创建人'},
          {prop: 'createTime', label: '创建时间', sortable: 'custom', formatter (row, column) {
            return appFunc.timeStamp2String(row.createTime)
          }},
          {prop: 'operate', label: '操作'}
        ],
        GET_URL: self.targetURL || '/ecmedm/rest/v1/recvList/list',
        tableData: [],
        params: {
          page: 0,
          size: 10,
          total: 0,
          sort: 'desc', // desc or asc
          order: '',
          tabledesc: ''
        },
        expandData: {
          msg: '这是展开的内容'
        },
        nextDisabled: false
      }
    },
    mounted () {
      let self = this
      self.getData()
    },
    methods: {
      handleSortChange (obj) { // 排序
        let self = this
        if (obj.prop === null) {
          self.params.order = ''
        } else {
          self.params.sort = obj.order.replace('ending', '')
        }
        self.params.order = obj.prop
        self.getData()
      },
      initParams () {
        let self = this
        self.params.page = 0
      },
      search () {
        let self = this
        self.initParams()
        self.getData()
      },
      getData () {
        let self = this
        let init = {
          method: 'GET',
          headers: {
            'ECMEDM-SID':'A8F975ED32BA469F8FABA0A7A657F043'
          }
        }
        let url = self.GET_URL
        url = `${url}?page=${self.params.page}&size=${self.params.size}&sort=${self.params.sort}&order=${self.params.order}&tabledesc=${self.params.tabledesc}`
        commonFetch(url, init).then((result) => {
          self.tableData = result.result.data
          self.params.total = result.result.total
//          self.$set(self.params, 'total', result.result.total)
          self.nextDisabled = (self.params.page + 1) * self.params.size > self.params.total
//          self.params.total = result.result.total
        })
      },
      changeTableData (action) {
        let self = this
        if (action === 'prev') {
          if (self.params.page === 0) {
          } else {
            self.params.page--
            self.getData()
          }
        } else {
          self.params.page++
          self.getData()
        }
      },
      handleSizeChange(size) {
        let self = this
        self.params.size = size
        self.getData()
      },
      handleCurrentChange (currentPage) {
        let self = this
        self.params.page = currentPage - 1
        self.getData()
      }
    },
    computed: {
      prevDisabled () {
        return this.params.page === 0
      }
    }
  }
</script>
