<template>
    <div class="pub-header">
        <!-- 假如父组件有slot  会替代渲染子组件对应的slot 若么有 子组件中的slot会渲染 -->
        <div class="base-title">浩瀚中华文化管理局</div>
        <Dropdown  placement="bottom-start">
            <slot name='return'></slot>
            <div class="user-center">
               <a href="javascript:void(0)">
                <Icon type="ios-contact" size="26" />
                {{users.currentAuthority}}
                <Icon type="ios-arrow-down"></Icon>
            </a>
            </div>
            <DropdownMenu slot="list">
                <DropdownItem>
                  <router-link to='/userCenter'><Icon type="ios-person-add" />&nbsp;个人中心</router-link>
                    </DropdownItem>
                <DropdownItem>
                   <router-link to=''> <Icon type="ios-planet" />&nbsp;修改密码</router-link>
                   </DropdownItem>
                <DropdownItem>
                  <a href="">
                    <Icon type="ios-recording" />&nbsp;退出系统
                  </a>
                </DropdownItem>
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
.ivu-dropdown-rel{
  display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    justify-items: center;
}
.ivu-dropdown-rel>div{
  display: flex;
    height: 50%;
    align-items: center;
}
.ivu-dropdown-rel .user-center{
  height: 100%
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
  height:100%;
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
  position: relative;
  float: right;
  width: 600px;
  margin-right: 30px;
}
</style>


