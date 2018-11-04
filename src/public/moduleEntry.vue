<template>
  <div class='layout'>
    <public-head :users="users">
        
    </public-head>
    <div class="public-wrap">
      <div class="index_ls_list_wrap">
        <ul class="index_ls_list" id="index_menu">
          <li  v-for="(item,index) in moduleData" 
          :key="index" :class="setClass(index,item.difcls)" 
          :style="setStyle(item.icon)"
          @click="gotoPage(item,moduleData)">
            <router-link :to="item.path">
              <!--  <router-link:to="{path:`${item.path}`,query:{id:item.id}} -->
              <div class="item-name">{{item.name}}</div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- 拿到用户的权限 生成对应的用户中心 菜单数据 从这里又下发到对应的页面 -->
</template>
<script>
import PublicHead from "../components/PublicHead";
import { getMenu } from "../api/api.js";
export default {
  name: "ModuleEntry",
  components: {
    PublicHead
  },
  data() {
    return {
      moduleData: []
    };
  },
  computed: {
    users: function(){
        return this.$store.state.user
    }
  },
  methods: {
    setClass(index,cls) {
            //let obj = {face: true}
            let obj={}
            obj[`index_ls_item${index}`] = true
            obj[`${cls}`] = true
            return obj
        },
    setStyle(sty) {
      // let obj ={'background':'none'}
      // obj[background] = `url(../assets/img/${sty}.png)`
      // return obj
    }
  },
  created() {
    let _this=this
    getMenu().then(function(res){
      debugger
      _this.moduleData=res.data
    })
  },
  mounted() {}
};
</script>
<style scoped>
.layout {
  background: url(../assets/img/index-bg.jpg) no-repeat center / cover;
}

.public-menu {
  width: 240px;
  height: auto;
  float: left;
}
.index_ls_list li {
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  list-style: none;
}
.index_ls_list li a {
  width: 100%;
  height: 100%;
  display: inline-block;
}
.public-content {
  overflow: hidden;
}
.index_ls_list_wrap {
  position: relative;
  top: 13%;
  width: 80%;
  height: 65%;
  margin: 0 auto;
}
.index_ls_list {
  width: 105%;
  height: 100%;
  margin: -2% 0 0 -5%;
}
.index_ls_list li {
  position: relative;
  float: left;
  width: 20%;
  height: 48%;
  margin: 2% 0 0 5%;
  cursor: pointer;
}
.index_ls_item0{
   background: url(../assets/img/index-item-bg-jcxx.png) no-repeat center /
    contain;
}
.index_ls_list .jcxx:before {
  background: url(../assets/img/index-item-icon-jcxx.png) no-repeat center /
    contain;
}
.index_ls_item1 {
  background: url(../assets/img/index-item-bg-wtcz.png) no-repeat center /
    contain;
}
.index_ls_list .wtcl:before {
  background: url(../assets/img/index-item-icon-wtcz.png) no-repeat center /
    contain;
}
.index_ls_item2 {
  background: url(../assets/img/index-item-bg-gzrz.png) no-repeat center /
    contain;
}
.index_ls_list .gzrz:before {
  background: url(../assets/img/index-item-icon-gzrz.png) no-repeat center /
    contain;
}
.index_ls_item3{
  background: url(../assets/img/index-item-bg-tzgg.png) no-repeat center /
    contain;
}
.index_ls_item4{
  background: url(../assets/img/index-item-bg-tzgg.png) no-repeat center /
    contain;
}
.index_ls_item5{
  background: url(../assets/img/index-item-bg-tzgg.png) no-repeat center /
    contain;
}
.index_ls_item6{
  background: url(../assets/img/index-item-bg-tzgg.png) no-repeat center /
    contain;
}
.index_ls_item7{
  background: url(../assets/img/index-item-bg-tzgg.png) no-repeat center /
    contain;
}
.index_ls_list .tzgg:before {
  background: url(../assets/img/index-item-icon-tzgg.png) no-repeat center /
    contain;
}
.index_ls_list .xxbs:before {
  background: url(../assets/img/index-item-icon-xxbs.png) no-repeat center /
    contain;
}
.index_ls_list .zhzx:before {
  background: url(../assets/img/index-item-icon-zhzx.png) no-repeat center /
    contain;
}
.index_ls_list .tjfx:before {
  background: url(../assets/img/index-item-icon-tjfx.png) no-repeat center /
    contain;
}
.index_ls_list .xtgl:before {
  background: url(../assets/img/index-item-icon-xtgl.png) no-repeat center /
    contain;
}
.index_ls_list li:before {
  content: "";
  position: absolute;
  width: 25%;
  left: 0;
  right: 0;
  margin: 0 auto;
  padding-top: 30%;
  top: 24%;
}
.index_ls_list .item-name {
  position: absolute;
  bottom: 22%;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 22px;
  letter-spacing: 0.1em;
  color: #fff;
  text-shadow: 3px 4px 8px rgba(0, 0, 0, 0.3);
  text-indent: 0.15em;
}
</style>
