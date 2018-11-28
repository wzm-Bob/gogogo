<template>
    <div>
        <BreadCrumb></BreadCrumb>
        <div class="public-menu">
            <public-tree></public-tree>
        </div>
        <div class="public-content">
       <h2>{{ msg }}</h2>
        <p>新闻ID：{{$route.params.id}}</p>
        </div>
    </div>
</template>
<script>
import PublicTree from "../../components/PublicTree"
export default {
  name: "article",
  components: {
    PublicTree
  },
  data(){
      return {
          msg:'我是哈哈'
      }
  }
};
</script>

