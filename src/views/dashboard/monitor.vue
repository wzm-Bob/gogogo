<template>
    <div>
        <div class="public-menu">
            <Menu  active-name="1">
                <MenuGroup title="内容管理">
                    <MenuItem name="1">
                    <Icon type="md-document" />
                    文章管理
                    </MenuItem>
                    <MenuItem name="2">
                    <Icon type="md-chatbubbles" />
                    评论管理
                    </MenuItem>
                </MenuGroup>
                <MenuGroup title="统计分析">
                    <MenuItem name="3">
                    <Icon type="md-heart" />
                    用户留存
                    </MenuItem>
                    <MenuItem name="4">
                    <Icon type="md-leaf" />
                    流失用户
                    </MenuItem>
                </MenuGroup>
            </Menu>
        </div>
        <div class="public-content">
            <Table size="large" :columns="columns1" :data="data1"></Table>
            <Table size="small" :columns="columns1" :data="data1"></Table>
         <pub-echarts :style="{width:'96%',height:'250px'}"></pub-echarts>
        </div>
       
    </div>

</template>
<script>
import pubEcharts from "./components/pubEcharts";
export default {
  name: "monitor",
  components:{
    pubEcharts
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

