<template>
    <div class="pub-header">
        <slot name='entry'></slot>
        <slot name='common'></slot>
        <div class="base-title"></div>
        <div class="base-link-wrap">
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
        </div>
        <div class="jzfp-navi" style="width: 714.734px;">
            <Carousel v-model="value1" loop :dots="none" :radius-dot="false" :arrow="always">
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

                  <CarouselItem>
                    <div class="demo-carousel">菜单一7</div>
                </CarouselItem>
            </Carousel>
        </div>

    </div>
</template>
<script>
export default {
    data(){
        return{
            value1: 0
        }
    }
};
</script>
<style>
.pub-header {
  position: relative;
  width: 100%;
  height: 90px;
  text-align: center;
  padding: 0 20px;
  max-height: 110px;
  background: url(../../assets/index-ls/header-bg.png) no-repeat center / cover;
}
.base-title {
  float: left;
  width: 360px;
  height: 70px;
  margin: 10px 0 0 20px;
  /*  background: url(img/index-ls/headder-base-title.png) no-repeat center / cover; */
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
  margin-right: 30px;
}
</style>


