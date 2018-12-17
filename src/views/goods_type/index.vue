<template>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="名称">
      <el-input type="text" v-model="formInline.name" placeholder="请填写名称" maxlength="10" size="medium" @keyup.enter.native="onSearch"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSearch">查询</el-button>
    </el-form-item>
    <el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="日期" width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120"></el-table-column>
      <el-table-column prop="address" label="地址" show-overflow-tooltip></el-table-column>
    </el-table>
  </el-form>

</template>

<script>
  import axios from 'axios'
  export default {
    mounted(){
      this.initData();
    },
    data() {
      return {
        formInline: {
          name: '',
          region: ''
        },
        tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: []
      }
    },
    methods: {
      initData(){
      },
      onSearch() {
          console.log('---------');
      },
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
  }
</script>