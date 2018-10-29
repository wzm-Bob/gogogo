<template>
    <div class="pub-header">
        <!-- 假如父组件有slot  会替代渲染子组件对应的slot 若么有 子组件中的slot会渲染 -->

        <div class="base-title">某某综合管理系统</div>
        <Dropdown  placement="bottom-start">
            <slot name='return'></slot>
            <a href="javascript:void(0)">
                <Icon type="ios-contact" size="26" />
                {{users.currentAuthority}}
                <Icon type="ios-arrow-down"></Icon>
            </a>
            <DropdownMenu slot="list">
                <DropdownItem>
                    <Icon type="ios-person-add" />&nbsp;个人中心</DropdownItem>
                <DropdownItem>
                    <Icon type="ios-planet" />&nbsp;修改密码</DropdownItem>
                <DropdownItem>
                    <Icon type="ios-recording" />&nbsp;后台完善</DropdownItem>
            </DropdownMenu>
        </Dropdown>
         <slot name='nav'></slot>
    </div>
</template>
<script>
export default {
  props: {
    users: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
     
    };
  }
};
</script>
<style>
.pub-header {
  width: 100%;
  height: 90px;
  line-height: 90px;
  text-align: center;
  padding: 0 20px;
  max-height: 110px;
  overflow: hidden;
  background: url(../../assets/img/header-bg.png) no-repeat center / cover;
}
.ivu-dropdown-rel a {
  color: #fff;
  font-size: 16px;
}
.ivu-dropdown-rel a:hover {
  color: #fff;
}
.base-title {
  display: inline-block;
  font-size: 28px;
  font-weight: 600;
  color: #fff;
  float: left;
  /*  background: url(img/index-ls/headder-base-title.png) no-repeat center / cover; */
}
.ivu-dropdown {
  width: 135px;
  float: right;
}
.base-link-wrap {
  float: right;
  margin-right: 35px;
  height: 100%;
  font-size: 16px;
  color: #fff;
  text-align: center;
}

.jzfp-navi {
  float: right;
  width: 600px;
}
</style>


