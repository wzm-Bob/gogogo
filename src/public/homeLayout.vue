<template>
  <div class='layout'>
    菜单和头部的共用
   <router-view></router-view>
  </div>
</template>
<script>

//注意引入的单个名字首字母要大写
export default {
  name:'HomeLayout',

  data() {
    return {
     
    };
  },
  computed: {
    
  },
  methods: {
  
  },
  created() {},
  mounted() {
    
  }
};
</script>
<style>

</style>
