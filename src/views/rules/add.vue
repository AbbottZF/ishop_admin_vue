<template>
    <div class="">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="路由类型" prop="type">
                <el-radio-group v-model="ruleForm.type">
                <el-radio disabled label="后台"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="上级菜单" prop="parent_id">
                <el-select v-model="parent_id" placeholder="请选择上级分类">
                <el-option label="一级菜单" value="0"></el-option>
                <!-- <el-option v-for="(item,index) in parent" :key="index" :label="item.name" :value="item.id"> -->
                </el-select>
            </el-form-item>
            <el-form-item label="路由" prop="path">
                <el-input v-model="ruleForm.path" style="width:400px;" maxlength="20" clearable></el-input>
            </el-form-item>
            <el-form-item label="名称" prop="name">
                <el-input v-model="ruleForm.name" style="width:400px;" maxlength="20" clearable></el-input>
            </el-form-item>
            <el-form-item label="侧边栏" prop="hidden">
                <el-switch v-model="ruleForm.hidden" active-text="开" inactive-text="关"></el-switch>
            </el-form-item>
            <el-form-item label="重定向路由" prop="redirect">
                <el-input v-model="ruleForm.redirect" style="width:400px;" maxlength="20" clearable></el-input>
            </el-form-item>
            <el-form-item label="根路由显示" prop="always_show">
                <el-switch v-model="ruleForm.always_show" active-text="开" inactive-text="关"></el-switch>
            </el-form-item>
            <el-form-item label="路由显示" prop="show">
                <el-switch v-model="ruleForm.show" active-text="开" inactive-text="关"></el-switch>
            </el-form-item>
            <el-form-item label="分配权限" prop="competence">
                <el-switch v-model="ruleForm.competence" active-text="开" inactive-text="关"></el-switch>
            </el-form-item>
            <el-form-item label="路由标题" prop="meta.title">
                <el-input v-model="ruleForm.meta.title" style="width:400px;" maxlength="20" clearable></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        ruleForm: {
            type:1,
            parent_id:0,
            path:'',
            name: '',
            hidden:false,
            redirect:'',
            always_show:true,
            show:true,
            competence:true,
            meta:{title:''},
        },
        parent_id:0,
        rules: {
          name: [
            { required: true, message: '请输入名称', trigger: 'blur' },
            // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          path:[
              { required: true, message: '请输入活动名称', trigger: 'blur' },
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>