<template>
    <div>
        <BreadCrumb></BreadCrumb> 
        <div class="public-menu">
            <public-menu></public-menu>
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
import PublicMenu from "../../components/PublicMenu";
export default {
  name: "table",
  components: {
    PublicMenu
  }
};
</script>

