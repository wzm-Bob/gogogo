<template>
  <div class='layout'>
    <public-head :users="users">
      <div slot="return" class="return-home"><a href="#">
          <Icon type="ios-home" size="26" />&nbsp;返回首页</a></div>
      <div slot="nav" class="jzfp-navi">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">气吞山河</div>
            <div class="swiper-slide">风起云涌</div>
            <div class="swiper-slide">大气磅礴</div>
            <div class="swiper-slide">盗亦有道</div>
            <div class="swiper-slide">傲视群雄</div>
            <div class="swiper-slide">君临天下</div>
            <div class="swiper-slide">开天辟地</div>
            <div class="swiper-slide">气贯长虹</div>
          </div>
          <!-- Add Pagination -->
         <!--  <div class="swiper-pagination"></div> -->
          <!-- Add Arrows -->
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>

      </div>
    </public-head>
    <div class="public-wrap">
      <div class="public-menu">
        <public-menu></public-menu>
      </div>
      <div class="public-content">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import PublicHead from "../components/PublicHead";
import PublicMenu from "../components/PublicMenu";
export default {
  name: "HomeLayout",
  components: {
    PublicHead,
    PublicMenu
  },
  data() {
    return {};
  },
  computed: {
    users: function() {
      return this.$store.state.user;
    }
  },
  methods: {
    _init_swiper() {
      let swiper = new Swiper(".swiper-container", {
        slidesPerView: 4,
        centeredSlides: false,
        spaceBetween: 5,
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true
        // },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      });
    }
  },
  created() {
   
  },
  mounted() {
     this._init_swiper();
  }
};
</script>
<style>
@import "../../node_modules/swiper/dist/css/swiper.min.css";
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  color: #fff;
 /*  background: #ef553d; */

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.layout {
  width: 100%;
  height: 100%;
  position: relative;
}
.return-home {
  height: 35px;
  line-height: 35px;
  position: relative;
  top: 25px;
}
.ivu-dropdown,
.ivu-dropdown-rel {
  height: 100%;
}
.ivu-dropdown-rel a {
  position: relative;
  top: -15px;
}
.public-wrap {
  position: absolute;
  top: 90px;
  left: 0;
  bottom: 0;
  width: 100%;
}
.public-menu {
  width: 240px;
  height: auto;
  float: left;
}
.public-content {
  overflow: hidden;
}
</style>
