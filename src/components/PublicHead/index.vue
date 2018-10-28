<template>
    <div class="pub-header">
        <!-- <h3></h3>
        <slot name='entry'></slot>
        <slot name='common'></slot> -->
        <div class="base-title">社会大学研发管理系统</div>
        <!-- <div class="base-link-wrap">
            <Dropdown placement="bottom-start">
                <a href="javascript:void(0)">
                    菜单(左)
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
        <div class="user-center">个人中心</div>
        <div class="jzfp-navi">
            <Carousel v-model="value3" :autoplay="setting.autoplay" :autoplay-speed="setting.autoplaySpeed" :dots="setting.dots" :radius-dot="setting.radiusDot" :trigger="setting.trigger" :arrow="setting.arrow">
                <CarouselItem>
                    <div class="demo-carousel">菜单一</div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel">菜单二</div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel">菜单3</div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel">菜单一4</div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel">菜单一5</div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel">菜单一6</div>
                </CarouselItem>
            </Carousel>
        </div>

    </div>
</template>
<script>
export default {
  data() {
    return {
        value3:0,
      setting: {
        autoplay: false,
        autoplaySpeed: 2000,
        dots: "none",
        radiusDot: false,
        trigger: "click",
        arrow: "always"
      }
    };
  }
};
</script>
<style>
.pub-header {
  position: relative;
  width: 100%;
  height: 90px;
  line-height: 90px;
  text-align: center;
  padding: 0 20px;
  max-height: 110px;
  overflow: hidden;
  background: url(../../assets/index-ls/header-bg.png) no-repeat center / cover;
}
.ivu-carousel-arrow>* {
    vertical-align: baseline;
    top: -21px;
    position: relative;
}
.base-title {
  display: inline-block;
  font-size: 28px;
  font-weight: 600;
  color: #fff;
  float: left;
  /*  background: url(img/index-ls/headder-base-title.png) no-repeat center / cover; */
}
.user-center {
  width: 180px;
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
.ivu-carousel-list{
    margin: 0 40px;
}
.ivu-carousel-item{
    width:120px!important;
}
.jzfp-navi {
  float: right;
  width:600px;
}
</style>


