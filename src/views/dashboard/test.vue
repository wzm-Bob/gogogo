<template>
<div class="layout-blank">
  <el-container class="layout-default">
    <el-header height="197px">
      <my-header/>
    </el-header>
    <el-main>
       <div class="page-index">
    <el-row>
      <el-col :span="5">
        <emenu/>
      </el-col>
      <el-col :span="19">
        <life/>
      </el-col>
    </el-row>
    <el-row >
      <el-col :span="24">
        <artistic/>
      </el-col>
    </el-row>
  </div>
    </el-main>
    <el-footer height="100%">
      <my-footer/>
    </el-footer>
  </el-container>
</div>
</template>

<script>
import Emenu from '@/components/index/menu.vue'
import Life from '@/components/index/life.vue'
import Artistic from '@/components/index/artistic.vue'
  import MyHeader from '@/components/public/header/index.vue'
  import MyFooter from '@/components/public/footer/index.vue'
  export default {
    components:{
      MyHeader,
      MyFooter,
       Emenu,
    Life,
    Artistic
    }
  }
</script>
<style lang="scss">
 @import "@/assets/css/index/index.scss";
</style>
