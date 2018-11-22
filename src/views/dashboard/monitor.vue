<template>
  <div>
    <BreadCrumb></BreadCrumb>
    <div class="public-menu">
       <template>
          <Menu ref="contactMenu" :accordion='true' width="auto" :open-names="openNames" :active-name="activeName" >
            <template v-for="item in menuData">
              <side-menu-item  v-if="item.children&&item.children.length!==0"  :parent-item="item" :key="'menu-'+item.path">
              </side-menu-item>
              <menu-item v-else   :name="item.name" :key="'menu-'+item.path">
                <Icon :type="item.icon" :size="15" />
                <span>{{ item.name }}</span>
              </menu-item>
            </template>
          </Menu>
        </template>
    </div>
    <div class="public-content">
      <Table size="large" :columns="columns1" :data="data1"></Table>
      <pub-echarts :style="{width:'96%',height:'250px'}"></pub-echarts>
    </div>
  </div>
</template>
<script>
import sideMenuItem from "../../components/CommonMenu";
import pubEcharts from "./components/pubEcharts";
export default {
  name: "monitor",
  components: {
    sideMenuItem,
    pubEcharts
  },
  props: {
    activeName: {
      type: String,
      default: "分析页"
    },
    openNames: {
      type: Array,
      default: () => ["dashboard"]
    }
  },
  data() {
    return {
      columns1: [
        {
          title: "Name",
          key: "name"
        },
        {
          title: "Age",
          key: "age"
        },
        {
          title: "Address",
          key: "address"
        }
      ],
      data1: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          date: "2016-10-03"
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park",
          date: "2016-10-01"
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park",
          date: "2016-10-02"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-04"
        }
      ],
      menuData: [
          {
            name: "dashboard",
            icon: "ios-speedometer-outline",
            path: "dashboard",
            children: [{
                name: "分析页",
                path: "analysis",
                link: "/indexPage/analysis"
              },
              {
                name: "监控页",
                path: "monitor",
                link: "/indexPage/monitor"
              },
              {
                name: "工作台",
                path: "workplace",
                link: "/indexPage/workplace"
                // hideInBreadcrumb: true,
                // hideInMenu: true,
              }
            ]
          },
          {
            name: "表单页",
            icon: "ios-speedometer-outline",
            path: "form",
            children: [{
                name: "基础表单",
                path: "basic-form"
              },
              {
                name: "分步表单",
                path: "step-form"
              },
              {
                name: "高级表单",
                authority: "admin",
                path: "advanced-form"
              }
            ]
          },
          {
            name: "列表页",
            icon: "ios-speedometer-outline",
            path: "list",
            children: [{
                name: "查询表格",
                path: "table-list"
              },
              {
                name: "标准列表",
                path: "basic-list"
              },
              {
                name: "卡片列表",
                path: "card-list"
              },
              {
                name: "搜索列表",
                path: "search",
                children: [{
                    name: "搜索列表（文章）",
                    path: "articles"
                  },
                  {
                    name: "搜索列表（项目）",
                    path: "projects"
                  },
                  {
                    name: "搜索列表（应用）",
                    path: "applications"
                  }
                ]
              }
            ]
          },
          {
            name: "详情页",
            icon: "ios-speedometer-outline",
            path: "profile",
            children: [{
                name: "基础详情页",
                path: "basic"
              },
              {
                name: "高级详情页",
                path: "advanced",
                authority: "admin"
              }
            ]
          },
          {
            name: "结果页",
            icon: "ios-speedometer-outline",
            path: "result",
            children: [{
                name: "成功",
                path: "success"
              },
              {
                name: "失败",
                path: "fail"
              }
            ]
          },
          {
            name: "异常页",
            icon: "ios-speedometer-outline",
            path: "exception",
            children: [{
                name: "403",
                path: "403"
              },
              {
                name: "404",
                path: "404"
              },
              {
                name: "500",
                path: "500"
              },
              {
                name: "触发异常",
                path: "trigger",
                hideInMenu: true
              }
            ]
          },
          {
            name: "账户",
            icon: "ios-speedometer-outline",
            path: "user",
            authority: "guest",
            children: [{
                name: "登录",
                path: "login"
              },
              {
                name: "注册",
                path: "register"
              },
              {
                name: "注册结果",
                path: "register-result"
              }
            ]
          }
        ]
    };
  }
};
</script>
<style>
.bread-area {
  height: 40px;
  line-height: 40px;
  text-align: left;
  margin-left: 30px;
  overflow: hidden;
}
.public-menu {
  width: 240px;
  height: auto;
  float: left;
  position: relative;
  margin-right: 15px;
}
.public-content {
  overflow: hidden;
  padding-right: 20px;
}
</style>

