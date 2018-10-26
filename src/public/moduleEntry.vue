<template>
  <div class='layout'>
    <public-head>
        <a class="base-home" slot="entry" href="/lsz/index.jsp">返回首页</a>
     <!--  <div slot="entry">
        <Dropdown placement="bottom-start">
          <a href="javascript:void(0)">
            个人中心
            <Icon type="ios-arrow-down"></Icon>
          </a>
          <DropdownMenu slot="list">
            <DropdownItem>驴打滚</DropdownItem>
            <DropdownItem>炸酱面</DropdownItem>
            <DropdownItem>豆汁儿</DropdownItem>
            <DropdownItem>冰糖葫芦</DropdownItem>
            <DropdownItem>北京烤鸭</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div> -->

    </public-head>
    <div class="public-wrap">
      <div class="index_ls_list_wrap">
        <ul class="index_ls_list" id="index_menu">
          <li class="index_ls_item0 jcxx" v-for="(item,index) in moduleData" :key="index" :style="{backgroundImage:'url(../assets/index-ls/'+item.icon+'.png)'}">
            <router-link :to="item.url">
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
export default {
  name: "ModuleEntry",
  components: {
    PublicHead
  },
  data() {
    return {
      moduleData: [
        {
          url: "/dashboard/analysis",
          name: "基础信息",
          icon: "index-item-bg-jcxx"
        },
        {
          url: "/dashboard/analysis",
          name: "金戈铁马",
          icon: "index-item-bg-tzgg"
        },
        {
          url: "/dashboard/analysis",
          name: "马踏飞燕",
          icon: "index-item-bg-wtcz"
        },
        {
          url: "/dashboard/analysis",
          name: "大漠穷秋",
          icon: "index-item-bg-xxbs"
        },
        {
          url: "/dashboard/analysis",
          name: "图穷匕见",
          icon: "index-item-bg-gzrz"
        },
        {
          url: "/dashboard/analysis",
          name: "大罗金仙",
          icon: "index-item-bg-zhzx"
        }
      ]
    };
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped>
.layout {
  background: url(../assets/index-ls/index-bg.jpg) no-repeat center / cover;
}
.layout {
  width: 100%;
  height: 100%;
}
.public-wrap {
  position: relative;
  height: calc(100% - 90px);
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
.index_ls_list .jcxx:before {
  background: url(../assets/index-ls/index-item-icon-jcxx.png) no-repeat center /
    contain;
}
.index_ls_list .wtcl:before {
  background: url(../assets/index-ls/index-item-icon-wtcz.png) no-repeat center /
    contain;
}
.index_ls_list .gzrz:before {
  background: url(../assets/index-ls/index-item-icon-gzrz.png) no-repeat center /
    contain;
}
.index_ls_list .tzgg:before {
  background: url(../assets/index-ls/index-item-icon-tzgg.png) no-repeat center /
    contain;
}
.index_ls_list .xxbs:before {
  background: url(../assets/index-ls/index-item-icon-xxbs.png) no-repeat center /
    contain;
}
.index_ls_list .zhzx:before {
  background: url(../assets/index-ls/index-item-icon-zhzx.png) no-repeat center /
    contain;
}
.index_ls_list .tjfx:before {
  background: url(../assets/index-ls/index-item-icon-tjfx.png) no-repeat center /
    contain;
}
.index_ls_list .xtgl:before {
  background: url(../assets/index-ls/index-item-icon-xtgl.png) no-repeat center /
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
