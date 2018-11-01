<template>
  <div id="areaTree">
    <div class="box-title">
      <a href="#">列表<i class="fa  fa-refresh" @click="freshArea">点击</i></a>
    </div>
    <div class="tree-box">
      <div class="zTreeDemoBackground left">
        <ul id="treeDemo" class="ztree"></ul>
      </div>
    </div>
  </div>
</template>
 
<script>
import "../../../node_modules/ztree/js/jquery.ztree.core.min.js";
import { getTreeData } from "../../api/api.js";
export default {
  name: "areaTree",
  components: {},
  data: function() {
    return {
      setting: {
        check: {
          enable: true,
          nocheckInherit: false,
          chkboxType: { Y: "p", N: "s" }
        },
      /*   async: {
            enable: true,
            url: "${ctx}/sys/sys-area-code!csGetTreeJson.do",
            autoParam: ["id"],
            dataType:'json'
        }, */
        data: {
           simpleData: {
                enable: true,
                /* idKey: "id",
                pIdKey: "pId",
                rootPId: 0 */
            }
        },
        callback: {
          beforeClick: this.beforeClick,
          /* 用于捕获单击节点之前的事件回调函数，并且根据返回值确定是否允许单击操作 */
          onClick: this.zTreeOnClick,
          /* 用于捕获节点被点击的事件回调函数 */
          onCheck: this.zTreeOnCheck,
          /* 用于捕获 checkbox / radio 被勾选 或 取消勾选的事件回调函数 */
          onAsyncSuccess: function(event, treeId, treeNode) {
            debugger
          },
          /* 异步数据完成 */
          onExpand: function(event, treeId, treeNode) {}
          /* 展开 */
        }
      },
     /*  zNodes: [
        {
          id: 1,
          pid: 0,
          name: "秣兵历马",
          open: false,
          nocheck: false,
          children: [
            {
              id: 11,
              pid: 1,
              name: "万夫之勇",
              children: [
                { id: 111, pid: 11, name: "梦回大唐" },
                { id: 112, pid: 11, name: "绝世枭雄" },
                { id: 113, pid: 11, name: "权势滔天" }
              ]
            },
            {
              id: 12,
              pid: 1,
              name: "首当其冲",
              open: false,
              children: [
                { id: 121, pid: 12, name: "万剑归宗" },
                { id: 122, pid: 12, name: "龙虎争霸" },
                { id: 123, pid: 12, name: "睥睨万物" }
              ]
            },
            {
              id: 13,
              pid: 1,
              name: "霸天绝地",
              open: false,
              children: [
                {
                  id: 100,
                  pid: 2,
                  name: "审核管理",
                  open: false,
                  children: [
                    { id: 1000, pid: 100, name: "用工审核" },
                    { id: 1001, pid: 100, name: "商家审核" },
                    { id: 1002, pid: 100, name: "机构审核" }
                  ]
                },
                { id: 131, pid: 13, name: "气吞山河" },
                { id: 132, pid: 13, name: "百步穿杨" },
                { id: 133, pid: 13, name: "一鼓作气" }
              ]
            },
            {
              id: 15,
              pid: 1,
              name: "公司管理",
              open: false,
              children: [
                { id: 1517, pid: 15, name: "我的工程案例" },
                { id: 1518, pid: 15, name: "联系人设置" },
                { id: 1519, pid: 15, name: "广告设置" }
              ]
            },
            {
              id: 16,
              pid: 1,
              name: "业务管理",
              open: false,
              children: [
                { id: 164, pid: 16, name: "合同范本" },
                { id: 165, pid: 16, name: "合同列表" },
                { id: 166, pid: 16, name: "需求调度" }
              ]
            },
            {
              id: 17,
              pid: 1,
              name: "订单管理",
              open: false,
              children: [
                { id: 171, pid: 17, name: "商品订单" },
                { id: 172, pid: 17, name: "用工订单" },
                { id: 175, pid: 17, name: "供应菜单" }
              ]
            }
          ]
        }
      ] */
    };
  },
  methods: {
    freshArea: function() {
      $.fn.zTree.init($("#treeDemo"), this.setting, this.zNodes);
    },
    zTreeOnClick: function(event, treeId, treeNode) {
      debugger
//       <sidebar></sidebar>
// <router-view></router-view>
       this.$route.router.go()
    },
    zTreeOnCheck: function(event, treeId, treeNode) {
    
    },
    beforeClick: function(treeId, treeNode) {
      debugger
    
    }
  },
  mounted() {
    debugger
    let _this=this
    getTreeData().then(function(res){
      debugger
       $.fn.zTree.init($("#treeDemo"), _this.setting, res.data);
    })
  }
};
</script>
<style>
@import "../../../node_modules/ztree/css/zTreeStyle/zTreeStyle.css";
#areaTree {
  border: 1px solid #e5e5e5;
  margin-bottom: 2px;
  border-radius: 4px;
  overflow: hidden;
}
.box-title {
  border-radius: 3px 3px 0 0;
  background-color: #f5f5f5;
}
.box-title a {
  color: #2fa4e7;
  text-decoration: none;
  font-size: 14px;
  display: block;
  padding: 8px 15px;
  cursor: pointer;
}
.box-title .fa {
  float: right;
  line-height: 20px;
}
</style>
