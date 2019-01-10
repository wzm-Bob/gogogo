<template>
  <div class='layout'>
    <public-head :users="users">      
    </public-head>
    <div class="public-wrap">
    用户中心
    <p class="typing">中英文mixed打字effect，作者：张鑫旭</p>
    </div>
  </div>
</template>
<script>
import PublicHead from "../../components/PublicHead";
export default {
  name: "UserCenter",
  components: {
    PublicHead
  },
  data() {
    return {
      
    }
  },
  computed: {
    users: function(){
        return this.$store.state.user
    }
  },
  methods: {
  
  },
  created() {
   
  },
  mounted() {}
};
</script>
<style scoped>
.layout {
    width: 100%;
  height: 100%;
  position: relative;
}
.public-menu {
  width: 240px;
  height: auto;
  float: left;
}
.typing {
    width: 18.5em; height: 1.25em;
    border-right: 1px solid transparent;
    animation: typing 3.5s steps(37, end), blink-caret .75s step-end infinite;
    font-family: Consolas, Monaco;
    word-break: break-all;
    overflow: hidden;
}
/* 打印效果 */
@keyframes typing {
    from { width: 0; }
    to { width: 18.5em; }
}
/* 光标闪啊闪 */
@keyframes blink-caret {
    from, to { border-color: transparent; }
    50% { border-color: currentColor; }
}
</style>
