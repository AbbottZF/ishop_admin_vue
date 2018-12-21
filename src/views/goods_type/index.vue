<template>
  <div class="app-container">
    <div class="filter-container" style="margin: 10px;">
      <el-input @keyup.enter.native="onSearch" style="width: 200px;" class="filter-item" placeholder="请填写名称" v-model="formData.name">
      </el-input>
      <el-select clearable style="width: 200px" class="filter-item" v-model="formData.parent_id" placeholder="选择一级分类">
        <el-option v-for="item in formData.parent" :key="item" :label="item" :value="item">
        </el-option>
      </el-select>
      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="onSearch">搜索</el-button>
      <el-button class="filter-item" style="margin-left: 10px;" @click="create" type="primary" icon="el-icon-plus">新增</el-button>
    </div>
    <el-table ref="multipleTable" :data="goods_list" tooltip-effect="dark" style="width: 100%;margin: 15px;" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="index" label="序号" width="120"/>
      <el-table-column prop="name" label="名称" width="120"/>
      <el-table-column prop="address" label="地址" show-overflow-tooltip/>
      <el-table-column prop="sort" label="排序"/>
      <el-table-column prop="status_text" label="状态"/>
      <el-table-column label="录入时间" width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="300" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button type="info" size="mini" @click="editInfo(scope.row)" icon="el-icon-tickets">详情</el-button>
          <el-button type="primary" size="mini" @click="editInfo(scope.row)" icon="el-icon-edit">编辑</el-button>
          <el-button type="danger" size="mini" @click="deleteInfo(scope.row)" icon="el-icon-delete">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination-container" style="margin: 5px 10px 10px 10px;text-align:left;padding-left:0px;">
      <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="page" :page-sizes="[10,20,30, 50]" :page-size="limit" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    mounted(){
      this.initData();
    },
    data() {
      return {
        formData:{
          name:'',parent_id:'',parent:[]
        },
        page:1,
        limit:15,
        total:100,
        formInline: {
          name: '',
          region: ''
        },
        goods_list: [{
          index:1,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          status_text:'正常',
          sort:1,
          action:'正常',
        }],
        multipleSelection: []
      }
    },
    methods: {
      handleSizeChange(){},
      handleCurrentChange(){},
      handleSizeChange(){},
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