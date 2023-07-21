<template>
    <aside class="x-aside" :style="{ width }">
        <slot></slot>
    </aside>
</template>
<script>
export default {
    name: 'XAside',
    componentName: 'XAside',
    props: {
        width: {
            default: "100px",
            type: String
        }
    }
}
</script>
<style lang="less" scoped>
@import '../assets/style/header.less';
</style>
