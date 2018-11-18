<template>
    <Submenu :name="parentItem.name">
        <template slot="title">
            <Icon :type="parentItem.icon" :size="15"/>
            <span>{{ parentItem.name }}</span>
        </template>
        <template v-for="item in parentItem.children">
            <side-menu-item 
                v-if="item.children&&item.children.length!==0" 
                :parent-item="item" 
                :key="'menu-'+item.path"
            >
            </side-menu-item>
            <menu-item v-else :name="item.name" 
            @click.native="hrefTo(item.link)"
            :style="{fontSize:'15px'}"
            :key="'menu-'+item.path">
                <Icon :type="item.icon" :size="15" />
                <span>{{ item.name }}</span>
            </menu-item>
        </template>
    </Submenu>
</template>

<script>
export default {
    name: 'sideMenuItem',
    props: {
        parentItem: {
            type: Object,
              default: () => {}
        }
    },
    methods: {
         hrefTo: function (linkTo) {
            console.log(this.$router)
         this.$router.push({path:linkTo})
        }
        /*第一个默认点击事件可以加在路由上面*/
        /*
        由于nav-item为自定义组件的实例，使用on直接绑定事件只能绑定自定义
        的事件，即在组件内部使用emit('name')的方式抛出的事件，如果在子组件实例上绑定
        原生的事件，需要使用.native的事件修饰符。因为button不是自定义组件，
        所以可以直接绑定原生事件，也不用一楼所说那样传入参数 */
    }
}
</script>

<style lang="scss" >
</style>