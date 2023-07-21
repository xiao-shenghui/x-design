<template>
    <header class="x-header" :style="{ height: height }">
        <slot></slot>
    </header>
</template>
<script>
export default {
    name: 'XHeader',
    componentName: 'XHeader',
    props: {
        height: {
            default: '50px',
            type: String
        }
    }
}
</script>
<style lang="less" scoped>
@import '../assets/style/header.less';
</style>
