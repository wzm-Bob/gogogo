<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  created(){
     //在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem("accountInfo") ) {
      debugger
        this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("accountInfo"))))
    } 
    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload",()=>{

        sessionStorage.setItem("accountInfo",JSON.stringify(this.$store.state))
         // this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("accountInfo"))))
    })
  }  
}
</script>
<style lang="scss">
html,body{height: 100%;width:100%}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
