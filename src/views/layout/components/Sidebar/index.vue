<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="isCollapse"
      mode="vertical"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
    >
      <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path"/>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'

export default {
  components: { SidebarItem },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    routes() {
      // let routes = Object.assign({}, this.$router.options.routes)
      // for(let item in routes){
      //   for(let v in routes[item].children){
      //     // console.log(v)
      //     if(typeof routes[item].children[v].mune_hidden === 'undefined'){
      //       routes[item].children[v].mune_hidden = false
      //     }
      //     if(routes[item].children[v].mune_hidden){
      //       console.log('--11--',routes[item].children[v])
      //     }
      //     // for(let i in routes[item].children[v]){
      //     //   if(i == 'meta' && typeof routes[item].children[v][i].mune_hidden === 'undefined'){
      //     //     routes[item].children[v][i].mune_hidden = false
      //     //   }
      //     //   if(routes[item].children[v][i].mune_hidden){
      //     //     console.log('--22--',routes[item].children[v])
      //     //   }
      //     // }
      //   }
      // }
      // console.log(routes)
      return this.$router.options.routes
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>
