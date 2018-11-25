<template>
    <div>
        <BreadCrumb></BreadCrumb>
        <div class="public-menu">
            <public-tree></public-tree>
        </div>
        <div class="public-content">
            <Tabs>
                <TabPane label="macOS" icon="logo-apple">标签一的内容</TabPane>
                <TabPane label="Windows" icon="logo-windows">标签二的内容</TabPane>
                <TabPane label="Linux" icon="logo-tux">标签三的内容</TabPane>
            </Tabs>
        </div>
    </div>
</template>
<script>
import PublicTree from "../../components/PublicTree";
export default {
  name: "table",
  components: {
    PublicTree
  }
};
</script>

