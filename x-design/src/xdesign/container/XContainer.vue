<template>
    <div class="x-container" :class="{ isVertical }">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'XContainer',
    componentName: 'XContainer',
    props: {
        direction: String,
    },
    computed: {
        isVertical() {
            // 逻辑1：用户是否传direction,水平(horizontal)和垂直(vertical)
            if (this.direction == "horizontal") {
                return false
            }
            else if (this.direction == "vertical") {
                return true
            }
            // 如果都不是，没传，或者传错了
            // 判断子虚拟节点的tag，即：遍历this.$slots.default, 判断有没有节点的componentOptions.tag 为'x-header' 或者'x-footer', 只要有一个是，就返回true
            return this.$slots.default.some(vnode => {
                let options = vnode.componentOptions;
                return options && options.tag == 'x-header' || options.tag == 'x-footer';
            })
            // this.$slots.default.some(vnode => {
            //     let options = vnode.componentOptions;
            //     if(options && options.tag == ('x-header' || 'x-footer')){
            //         return true
            //     }
            //     else{
            //         return false
            //     }
            // });
        }
    }
}
</script>
<style lang="less" scoped>
@import url('../assets/style/container.less');
</style>
