<template>
  <div>
    <input type="text" x-webkit-speech lang="zh-CN" />
    <textarea id="speech" v-model="speech.text" class="gwyj-textarea" maxlength="250" placeholder="请详细描述你的岗位意见"></textarea>
  </div>
</template>
<script>
export default {
  data() {
    return {
      speech: "",
      text: ""
    };
  },
  methods: {
    stopRecognize() {
      plus.speech.stopRecognize();
    },
    startRecognize() {
      if (
        plus.os.name == "Android" &&
        navigator.userAgent.indexOf("StreamApp") > 0
      ) {
        plus.nativeUI.toast("当前环境暂不支持语音识别插件");
        return;
      }
      var options = {};
      options.engine = "iFly";
      plus.speech.startRecognize(
        options,
        function(s) {
          text = $("#speech").val() + s; // 控制250字之间···
          if (text.length > 250) {
            text = text.substr(0, 250);
          } else {
            $("#speech").val(text);
          }
          console.log($scope.speech.text);
        },
        function(e) {
          //            alert("语音识别失败！");
          plus.nativeUI.toast("语音识别失败");
        }
      );
      //        setTimeout( stopRecognize, 10000 );
    }
  }
};
</script>
<style>
</style>


