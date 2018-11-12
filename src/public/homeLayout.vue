<template>
  <div class='layout'>
    <public-head :users="users">
      <div slot="return" class="return-home">
        <router-link to='/moduleEntry'>
          <Icon type="ios-home" size="26" />&nbsp;返回首页
        </router-link>
        </div>
    <public-nav slot="nav"
    @msg-from-child='handlechildData'
     :navData='menuData'></public-nav>
    </public-head>
    <div class="public-wrap">
      <router-view />
    </div>
  </div>
</template>
<script>
import PublicHead from "../components/PublicHead";
import PublicNav from "../components/PublicNav";
import { getCurrMenu } from "../api/api.js";
export default {
  name: "HomeLayout",
  components: {
    PublicHead,
    PublicNav
  },
  data() {
    return {
      menuData: []
    };
  },
  computed: {
    users: function() {
      return this.$store.state.user;
    }
  },
 /*  watch: {
    $route(to, from) {
      debugger;
      if ((to = "")) {
      }
    }
  }, */
  methods: {
   handlechildData(item){
     var _this = this;
       getCurrMenu(item.id).then(function(res) {
            _this.menuData = res.data
      });
      this.$router.push({ path: item.path, query: {id:item.id} });
   }
  },
  created() {
    var newsID = this.$route.query.id;
    var _this = this;
    getCurrMenu(newsID).then(function(res) {
        _this.menuData = res.data
    });
  },
  mounted() {
   
  }
};
</script>
<style scoped>
.layout {
  width: 100%;
  height: 100%;
  position: relative;
}
.return-home {
  height: 35px;
  line-height: 35px;
  position: relative;
  top: 25px;
}
.ivu-dropdown,
.ivu-dropdown-rel {
  height: 100%;
}
.ivu-dropdown-rel a {
  top: -15px;
}
.public-wrap {
  position: absolute;
  top: 90px;
  left: 0;
  bottom: 0;
  width: 100%;
  overflow-y: auto;
}
</style>
