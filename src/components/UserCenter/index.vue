<template>
  <div class='layout'>
    <public-head :users="users">      
    </public-head>
    <div class="public-wrap">
    用户中心
    </div>
  </div>
</template>
<script>
import PublicHead from "../../components/PublicHead";
export default {
  name: "UserCenter",
  components: {
    PublicHead
  },
  data() {
    return {
      
    }
  },
  computed: {
    users: function(){
        return this.$store.state.user
    }
  },
  methods: {
  
  },
  created() {
   
  },
  mounted() {}
};
</script>
<style scoped>
.layout {
    width: 100%;
  height: 100%;
  position: relative;
}
.public-menu {
  width: 240px;
  height: auto;
  float: left;
}
</style>
