<template>
  <div class='layout'>
    <public-head :users="users">
      <div slot="return" class="return-home"><a href="#">
          <Icon type="ios-home" size="26" />&nbsp;返回首页</a></div>
      <div slot="nav" class="jzfp-navi">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in menuData">
              <router-link :to="item.path">{{item.name}}</router-link>
            </div>
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
    return {
      menuData:[
        {
          name:'氣吞山河',
          path:'/dashboard/workplace',
          open:true
        },
         {
          name:'冠世無雙',
          path:'',
          open:false
        },
         {
          name:'走馬觀花',
          path:'/dashboard/workplace',
          open:false
        },
         {
          name:'龍吟九霄',
          path:'/dashboard/workplace',
          open:false
        },
         {
          name:'策馬揚鞭',
          path:'/dashboard/workplace',
          open:false
        },
         {
          name:'霸絕天下',
          path:'/dashboard/workplace',
          open:false
        },
         {
          name:'捨我其誰',
          path:'',
          open:false
        },
         {
          name:'君臨天下',
          path:'',
          open:false
        },
      ]
    };
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
    },
    gotoPage(item, subMenu) {
      for (var key in subMenu) {
        subMenu[key].open = false;
      }
      item.open = true;
      this.refreshPage(this.$router.history.current.path, item.path);
    },
    refreshPage(oldPath, curPath) {
      if (oldPath == curPath) {
        this.$emit("onRefresh", curPath);
      } else {
        this.$router.push({ path: curPath, replace: true });
      }
    }
  },
  created() {},
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
