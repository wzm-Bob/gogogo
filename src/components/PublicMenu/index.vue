<template>
  <div id="areaTree">
    <div class="zTreeDemoBackground left">
      <ul id="treeDemo" class="ztree"></ul>
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
        data: {
          simpleData: {
            /* 是否启用简单数据 平级的对象 */
            enable: true,
            idKey: "id",
            pIdKey: "pid",
            rootPId: 0
          }
        },
        callback: {
          onClick: this.zTreeOnClick,
          /* 用于捕获节点被点击的事件回调函数 */
          onExpand: function(event, treeId, treeNode) {}
          /* 展开 */
        }
      }
    };
  },
  methods: {
    freshArea: function() {
      $.fn.zTree.init($("#treeDemo"), this.setting, this.zNodes);
    },
    zTreeOnClick: function(event, treeId, treeNode) {

      /* this.$router.push({path:’/path’,query:{form:form}});
      this.$router.push({name: hello,params: {page: '1',code: '8989'}}) */
    }
  
  },
  mounted() {
    let _this = this;
    getTreeData().then(function(res) {
      $.fn.zTree.init($("#treeDemo"), _this.setting, res.data);
    });
  }
};
</script>
<style>
@import "../../../node_modules/ztree/css/zTreeStyle/zTreeStyle.css";
#areaTree {
  border: 1px solid #c6c6c6;
  margin-bottom: 2px;
  border-radius: 4px;
  overflow: auto;
  height: 500px;
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
