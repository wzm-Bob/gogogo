<template>
   <div class="bread-area">
    <BreadcrumbItem v-for="(item,index) in levelList" v-if="item.meta.title" :key="item.path">
        <span v-if="item.redirect==='noredirect'||index==levelList.length-1" class="no-redirect">{{item.meta.title}}</span>
        <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
    </BreadcrumbItem>
   </div>
</template>
<script>
import pathToRegexp from 'path-to-regexp'
export default {
    data(){
        return {
            levellist:null
        }
    },
    watch:{
       $route(to,from) {
           debugger
      this.getBreadcrumb()
    }
    },
    created() {
    this.getBreadcrumb()
  },
  methods:{
       getBreadcrumb() {
      debugger
      let matched = this.$route.matched.filter(item => {
        if (item.name) {
          return true
        }
      })
      const first = matched[0]
      if (first && first.name.trim().toLocaleLowerCase() !== '首頁'.toLocaleLowerCase()) {
        matched = [{ path: '/analysis', meta: { title: '首頁' }}].concat(matched)
      }
      this.levelList = matched
    },
    pathCompile(path) {
      debugger
      // To solve this problem https://github.com/PanJiaChen/vue-element-admin/issues/561
      const { params } = this.$route
      var toPath = pathToRegexp.compile(path)
      return toPath(params)
    },
    handleLink(item) {
      debugger
      const { redirect, path } = item
      if (redirect) {
        this.$router.push(redirect)
        return
      }
      this.$router.push(this.pathCompile(path))
    }
  }
};
</script>
<style>
</style>


