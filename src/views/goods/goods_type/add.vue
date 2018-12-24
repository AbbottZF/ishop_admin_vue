<template>
  <div class="app-container">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="分类名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="上级分类" prop="parent_id">
        <el-select v-model="ruleForm.parent_id" placeholder="请选择上级分类">
          <el-option label="一级分类" value="0"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="排序值" prop="sort">
        <el-input v-model="ruleForm.sort"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :loading="loading" :disabled="loading" @click="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
    data() {
      return {
        loading:false,
        ruleForm: {
          name: '',
          parent_id: '',
          sort: 0,
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          parent_id: [
            { required: true, message: '请选择上级分类', trigger: 'change' }
          ],
          sort: [
            { required: true, message: '请填写排序值', trigger: 'blur' },
            { min: 0, max: 8, message: '最大8位数', trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      submit(formName) {
        this.loading = true
        setTimeout(()=>{
          this.loading = false
        },1000);
        // this.$refs[formName].validate((valid) => {
        //   if (valid) {
        //     alert('submit!');
        //   } else {
        //     console.log('error submit!!');
        //     return false;
        //   }
        // });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
