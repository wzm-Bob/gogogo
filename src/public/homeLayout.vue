<template>
  <div class='layout'>
    <public-head :users="users">
      <div slot="return" class="return-home"><a href="#">
          <Icon type="ios-home" size="26" />&nbsp;返回首页</a></div>
      <div slot="nav" class="jzfp-navi">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in menuData" :class="{active:item.open}" :key="index" @click="gotoPage(item)">
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
    </public-head>
    <div class="public-wrap">
      <router-view />
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import PublicHead from "../components/PublicHead";
import { getCurrMenu } from "../api/api.js";
export default {
  name: "HomeLayout",
  components: {
    PublicHead
  },
  data() {
    return {
      menuData: [
        {
          name: "氣吞山河",
          path: "/dashboard/analysis",
          icon: "index-item-bg-jcxx",
          difcls: "jcxx",
          id: 1,
          open: false
        },
        {
          name: "冠世無雙",
          path: "/dashboard/monitor",
          icon: "index-item-bg-tzgg",
          difcls: "wtcl",
          id: 2,
          open: false
        },
        {
          name: "走馬觀花",
          path: "/dashboard/workplace",
          icon: "index-item-bg-wtcz",
          difcls: "gzrz",
          id: 3,
          open: false
        },
        {
          name: "龍吟九霄",
          path: "/list/excel",
          icon: "index-item-bg-xxbs",
          difcls: "tzgg",
          id: 4,
          open: false
        },
        {
          name: "策馬揚鞭",
          path: "/list/table",
          icon: "index-item-bg-gzrz",
          difcls: "xxbs",
          id: 5,
          open: false
        },
        {
          name: "霸絕天下",
          path: "/dashboard/monitor",
          icon: "index-item-bg-zhzx",
          difcls: "xtgl",
          id: 6,
          open: false
        },
        {
          name: "捨我其誰",
          path: "/dashboard/monitor",
          icon: "index-item-bg-gzrz",
          difcls: "xxbs",
          id: 7,
          open: false
        },
        {
          name: "君臨天下",
          path: "/dashboard/workplace",
          icon: "index-item-bg-tzgg",
          difcls: "wtcl",
          id: 8,
          open: false
        }
      ]
    };
  },
  computed: {
    users: function() {
      return this.$store.state.user;
    }
  },
  watch: {
    $route(to, from) {
      debugger;
      if ((to = "")) {
      }
    }
  },
  methods: {
    _init_swiper() {
      let swiper = new Swiper(".swiper-container", {
        slidesPerView: 5,
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
    },
    gotoPage(item) {
      debugger
      /*  for (var key in Menu) {
        //所有的置为false  然后当前item打开
        Menu[key].open = false;
      }
      item.open = true; */
       var _this = this;
       getCurrMenu(item.id).then(function(res) {
        _this.menuData = res.data
      });
      this.$router.push({ path: item.path, query: {id:item.id} });
    }
  },
  created() {
    debugger;
    var newsID = this.$route.query.id;
    var _this = this;

    getCurrMenu(newsID).then(function(res) {
      debugger;
      let Menu = res.data;
      _this.menuData = Menu;
    });
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
