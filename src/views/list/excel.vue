<template>
    <div>
        <BreadCrumb></BreadCrumb> 
        <div class="public-menu">
            <public-menu></public-menu>
        </div>
        <div class="public-content">
             <Input prefix="ios-contact" placeholder="Enter name" style="width: auto" />
        <Input suffix="ios-search" placeholder="Enter text" style="width: auto" />
        <Input placeholder="Enter name" style="width: auto">
            <Icon type="ios-contact" slot="prefix" />
        </Input>
        <Input placeholder="Enter text" style="width: auto">
            <Icon type="ios-search" slot="suffix" />
        </Input>
        </div>

    </div>
</template>
<script>
import PublicMenu from "../../components/PublicMenu";
export default {
    name:'excel',
    components: {
        PublicMenu
    }
}
</script>

