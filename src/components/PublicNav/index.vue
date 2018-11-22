<template>
  <div class="jzfp-navi">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in navData" :class="{active:item.open}" :key="index" @click="gotoPage(item)">
          {{item.name}}
        </div>
      </div>
      <!-- Add Pagination -->
      <!--  <div class="swiper-pagination"></div> -->
      <!-- Add Arrows -->

    </div>
    <div class="swiper-button-next">&gt;</div>
    <div class="swiper-button-prev">&lt;</div>

  </div>
</template>
<script>
import Swiper from "swiper";
export default {
  props: {
    navData: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    _init_swiper() {
      let swiper = new Swiper(".swiper-container", {
         loop:false,		
        initialSlide: 0,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        slidesPerView: 5,
       // centeredSlides: false,
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
    },
    gotoPage(item) {
      this.$emit("msg-from-child", item);
      /*  for (var key in Menu) {
        //所有的置为false  然后当前item打开
        Menu[key].open = false;
      }
      item.open = true; */
    }
  },
  mounted() {
    setTimeout;
    this._init_swiper();
  },
  created() {}
};
</script>
<style>
@import "../../../node_modules/swiper/dist/css/swiper.min.css";
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-slide.active {
  background: rgb(209, 4, 4);
}
.swiper-button-next,
.swiper-button-prev {
  background-image: none;
  font-size: 32px;
  color: #fff;
  font-weight: 800;
  top: 25%;
}
.swiper-slide a,
.swiper-slide a:hover {
  color: #fff;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  color: #fff;
  cursor: pointer;
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
.swiper-button-next,
.swiper-container-rtl .swiper-button-prev {
  right: -25px;
  outline: none;
}
.swiper-button-prev,
.swiper-container-rtl .swiper-button-next {
  left: -25px;
  outline: none;
}
</style>

