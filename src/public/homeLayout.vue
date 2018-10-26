<template>
  <div class='layout'>
    <public-head></public-head>
    <div class="public-wrap">
      <div class="public-menu">
        <public-menu></public-menu>
      </div>
      <div class="public-content">
         <router-view/>
      </div>
    </div>
  </div>
</template>
<script>
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
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style>
.layout{width: 100%;height: 100%;}
.public-wrap {
   position: relative;
    top: 90px;
    height: calc(100% - 90px);
}
.public-menu{
  width: 240px;
  height: auto;
  float: left;
}
.public-content{
  overflow: hidden;
}
</style>
