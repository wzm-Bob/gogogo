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
        <div style="padding:20px;" id="app">
        <div class="panel panel-primary">
            <div class="panel-heading">用户管理</div>
            <table class="table table-bordered table-striped text-center">
                <thead>
                    <tr>
                        <th>用户名</th>
                        <th>年龄</th>
                        <th>毕业学校</th>
                        <th>备注</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <template v-for="row in rows ">
                        <tr><td>{{row.Name}}</td><td>{{row.Age}}</td><td>{{row.School}}</td><td>{{row.Remark}}</td>
                        <td><a href="#" @click="Edit(row)">编辑</a>&nbsp;&nbsp;<a href="#" @click="Delete(row.Id)">删除</a></td>
                        </tr>
                    </template>
                    <tr>
                        <td><input type="text" class="form-control" v-model="rowtemplate.Name" /></td>
                        <td><input type="text" class="form-control" v-model="rowtemplate.Age" /></td>
                        <td><select class="form-control" v-model="rowtemplate.School">
   　　　　　　　　　　　　　　　　 <option>中山小学</option>
    　　　　　　　　　　　　　　　　<option>复兴中学</option>
    　　　　　　　　　　　　　　　　<option>光明小学</option>
　　　　　　　　　　　　　　　　</select></td>
                        <td><input type="text" class="form-control" v-model="rowtemplate.Remark" /></td>
                        <td><button type="button" class="btn btn-primary" v-on:click="Save">保存</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    </div>
  </div>
</template>
<script>
import sideMenuItem from "../../components/CommonMenu";
export default {
  name: "change",
  components: {
    sideMenuItem
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
            rows: [
            { Id: 1, Name: '小明', Age: 18, School: '光明小学', Remark: '三好学生' },
            { Id: 2, Name: '小刚', Age: 20, School: '复兴中学', Remark: '优秀班干部' },
            { Id: 3, Name: '吉姆格林', Age: 19, School: '光明小学', Remark: '吉姆做了汽车公司经理' },
            { Id: 4, Name: '李雷', Age: 25, School: '复兴中学', Remark: '不老实的家伙' },
            { Id: 5, Name: '韩梅梅', Age: 22, School: '光明小学', Remark: '在一起' },
            ],
            rowtemplate: { Id: 0, Name: '', Age: '', School: '', Remark: '' },
        
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
  },
  methods:{
      Save: function (event) {
                if (this.rowtemplate.Id == 0) {
                    //设置当前新增行的Id
                    this.rowtemplate.Id = this.rows.length + 1;
                    this.rows.push(this.rowtemplate);
                }
                
                //还原模板
                this.rowtemplate = { Id: 0, Name: '', Age: '', School: '', Remark: '' }
            },
            Delete: function (id) {
                //实际项目中参数操作肯定会涉及到id去后台删除，这里只是展示，先这么处理。
                for (var i=0;i<this.rows.length;i++){
                    if (this.rows[i].Id == id) {
                        this.rows.splice(i, 1);
                        break;
                    }
                }
            },
            Edit: function (row) {
                this.rowtemplate = row;
            }
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

