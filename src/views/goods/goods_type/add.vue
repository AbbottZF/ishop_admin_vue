<template>
  <div class="app-container">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="分类名称" prop="name">
        <el-input v-model="ruleForm.name" style="width:400px;" maxlength="20" clearable></el-input>
      </el-form-item>
      <el-form-item label="上级分类" prop="parent_id">
        <el-select v-model="parent_id" placeholder="请选择上级分类">
          <el-option label="一级分类" value="0"></el-option>
          <!-- <el-option v-for="(item,index) in parent" :key="index" :label="item.name" :value="item.id"> -->
        </el-select>
      </el-form-item>
      <el-form-item label="排序值" prop="sort">
        <el-input v-model="ruleForm.sort" style="width:400px;" maxlength="10" clearable></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :loading="loading" :disabled="loading" @click="submit('ruleForm')">保存</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
    created(){
      this.fetchData();
    },
    data() {
      return {
        loading:false,
        ruleForm: {
          name: '',
          parent_id: '',
          sort: '',
        },
        parent_id:'',
        parent:[],
        rules: {
          name: [
            { required: true, message: '请输入分类名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          parent_id: [
            { required: true, message: '请选择上级分类', trigger: 'change' }
          ],
          sort: [
            { required: true, message: '请输入数字', trigger: 'blur' },
            // { type: 'number', message: '请输入数字', trigger: 'blur' }
          ],
        }
      };
    },
    watch:{
      parent_id(){
        this.ruleForm.parent_id = this.parent_id
      }
    },
    methods: {
      fetchData(){
        this.$store.dispatch('getList', {parent_id:0}).then((res) => {
          this.parent = Object.assign({}, res.data)
        }).catch(() => {

        })
      },
      submit(formName) {
        this.loading = true
        setTimeout(()=>{
          this.loading = false
        },1000);
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      handleLink(path) {
        this.$router.push({path:path})
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
