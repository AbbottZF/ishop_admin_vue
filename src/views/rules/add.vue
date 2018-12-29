<template>
    <div class="">
      <el-form :model="form" :rules="rules" ref="form" label-width="100px" class="demo-form">
        <el-form-item label="路由标题" prop="title">
          <el-input v-model="form.title" style="width:400px;" maxlength="10" clearable></el-input>
        </el-form-item>
        <!-- <el-form-item label="路由类型" prop="type">
            <el-radio-group v-model="form.type">
            <el-radio disabled label="后台"></el-radio>
            </el-radio-group>
        </el-form-item> -->
        <el-form-item label="上级菜单" prop="parent_id">
          <el-select class="filter-item" v-model="form.parent_id" placeholder="请选择上级分类">
            <el-option label="一级菜单" value="0"></el-option>
            <el-option v-for="(item,index) in parent" :key="index" :label="item.name" :value="item.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="路由" prop="path">
          <el-input v-model="form.path" style="width:400px;" maxlength="20" clearable></el-input>
        </el-form-item>
        <el-form-item label="分组" prop="group">
          <el-autocomplete class="inline-input" v-model="form.group" :fetch-suggestions="groupList" placeholder="请选择分组" value-key="name"></el-autocomplete>
        </el-form-item>
        <el-form-item label="名称" prop="name">
          <el-input v-model="form.name" style="width:400px;" maxlength="20" clearable></el-input>
        </el-form-item>
        <el-form-item label="重定向路由" prop="redirect">
            <el-input v-model="form.redirect" style="width:400px;" maxlength="20" clearable></el-input>
        </el-form-item>
        <el-form-item label="侧边栏">
            <el-switch v-model="showleft" active-text="开" inactive-text="关"></el-switch>
        </el-form-item>
        <el-form-item label="根路由显示" prop="always_show">
            <el-switch v-model="form.always_show" active-text="开" inactive-text="关"></el-switch>
        </el-form-item>
        <el-form-item label="路由显示" prop="show">
            <el-switch v-model="form.show" active-text="开" inactive-text="关"></el-switch>
        </el-form-item>
        <el-form-item label="分配权限" prop="competence">
            <el-switch v-model="form.competence" active-text="开" inactive-text="关"></el-switch>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('form')" :disabled="disabled" v-loading.fullscreen.lock="fullscreenLoading">立即创建</el-button>
            <el-button @click="resetForm('form')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>
<script>
  export default {
    created(){
      // this.fullscreenLoading = true;
      this.fetchData();
    },
    data() {
      return {
        form: {
            type:1,
            parent_id:'0',
            path:'',
            name: '',
            hidden:true,
            redirect:'',
            always_show:true,
            show:true,
            competence:true,
            title:'',
            meta:{title:''},
        },
        fullscreenLoading: false,
        parent:[],
        showleft:true,
        grouplist: [],
        disabled:false,
        rules: {
          title: [
            { required: true, message: '请输入路由标题', trigger: 'blur' },
          ],
          parent_id: [
            { required: true, message: '请选择上级菜单', trigger: 'blur' },
          ],
          name: [
            { required: true, message: '请输入名称', trigger: 'blur' },
          ],
          path:[
              { required: true, message: '请输入路由', trigger: 'blur' },
          ],
        }
      };
    },
    watch:{
      showleft(val){
        this.form.hidden = val
      },
    },
    methods: {
      openFullScreen2() {
        const loading = this.$loading({
          lock: true,
          text: '上传',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        setTimeout(() => {
          loading.close();
        }, 2000);
      },
      fetchData(){
        this.$store.dispatch('getGroup', {parent_id:0}).then((res) => {
          this.parent = Object.assign({}, res.data)
        }).catch(() => {

        })
      },
      groupList(queryString, cb){
        //获取分组名称
        // var restaurants = this.restaurants;
        // var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(this.grouplist);
      },
      submitForm(formName) {
        this.fullscreenLoading = true;
        this.$refs[formName].validate((valid) => {
          if (!valid) {
            this.fullscreenLoading = false;
            return false;
          }
          this.disabled = true;
          this.$store.dispatch('create',this.form).then((res)=>{
            this.disabled = false;
            this.fullscreenLoading = false;
          }).catch(()=>{
            this.disabled = false;
            this.fullscreenLoading = false;
          })
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>