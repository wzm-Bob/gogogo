<template>
  <div>
    <BreadCrumb></BreadCrumb>
    <div class="public-menu">
      <public-tree></public-tree>
    </div>
    <div class="public-content">
      <Table :data="tableData" :columns="tableColumns1" stripe></Table>
      <div style="margin: 10px;overflow: hidden">
        <div style="float: right;">
          <Page :total="100" :current="1" @on-change="changePage"></Page>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PublicTree from "../../components/PublicTree";
import { getTable } from "../../api/api.js";
export default {
  name: "analysis",
  components: {
    PublicTree
  },
  data() {
    return {
      tableData: [],
      tableColumns1: [
        {
          title: "姓名",
          key: "name"
        },
        {
          title: "状态",
          key: "status",
          render: (h, params) => {
            const row = params.row;
            const color =
              row.status === 1
                ? "primary"
                : row.status === 2
                  ? "success"
                  : "error";
            const text =
              row.status === 1
                ? "Working"
                : row.status === 2
                  ? "Success"
                  : "Fail";

            return h(
              "Tag",
              {
                props: {
                  type: "dot",
                  color: color
                }
              },
              text
            );
          }
        },
        {
          title: "政策法规",
          key: "portrayal",
          render: (h, params) => {
            return h(
              "Poptip",
              {
                props: {
                  trigger: "hover",
                  title: params.row.portrayal.length + "portrayals",
                  placement: "bottom"
                }
              },
              [
                h("Tag", params.row.portrayal.length),
                h(
                  "div",
                  {
                    slot: "content"
                  },
                  [
                    h(
                      "ul",
                      this.tableData[params.index].portrayal.map(item => {
                        return h(
                          "li",
                          {
                            style: {
                              textAlign: "center",
                              padding: "4px"
                            }
                          },
                          item
                        );
                      })
                    )
                  ]
                )
              ]
            );
          }
        },
        {
          title: "大家",
          key: "people",
          render: (h, params) => {
            return h(
              "Poptip",
              {
                props: {
                  trigger: "hover",
                  title: params.row.people.length + "customers",
                  placement: "bottom"
                }
              },
              [
                h("Tag", params.row.people.length),
                h(
                  "div",
                  {
                    slot: "content"
                  },
                  [
                    h(
                      "ul",
                      this.tableData[params.index].people.map(item => {
                        return h(
                          "li",
                          {
                            style: {
                              textAlign: "center",
                              padding: "4px"
                            }
                          },
                          item.n + "：" + item.c + "People"
                        );
                      })
                    )
                  ]
                )
              ]
            );
          }
        },
        {
          title: "创建时间",
          key: "time",
          render: (h, params) => {
            return h("div", "Almost" + params.row.time + "days");
          }
        },
        {
          title: "更新时间",
          key: "update",
          render: (h, params) => {
            debugger
            return h(
              "div",
              this.formatDate(this.tableData[params.index].update)
            );
          }
        }
      ]
    };
  },
  methods: {  
    formatDate(date) {
      var date = new Date(date);
      const y = date.getFullYear();
      let m = date.getMonth() + 1;
      m = m < 10 ? "0" + m : m;
      let d = date.getDate();
      d = d < 10 ? "0" + d : d;
      return y + "-" + m + "-" + d;
    },
    changePage(e) {
      // The simulated data is changed directly here, and the actual usage scenario should fetch the data from the server
      var that=this
       getTable().then(function(res){
         var list=res.data
          that.tableData =list
      });
     
    }
  },
  mounted() {
    var that= this
    getTable().then(function(res){
      var list=res.data
      that.tableData=list
    })
  }
};
</script>
