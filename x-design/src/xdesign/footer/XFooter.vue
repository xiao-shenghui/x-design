<template>
    <footer class="x-footer" style="{height}">
        <slot></slot>
    </footer>
</template>
<script>
export default {
    name: 'XFooter',
    componentName: 'XFooter',
    props: {
        height: {
            default: '80px',
            type: String
        }
    }
}
</script>
<style lang="less" scoped>
@import '../assets/style/header.less';
</style>
