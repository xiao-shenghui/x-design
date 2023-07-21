<template>
    <!-- :class="{s:s}"记得写成对象的形式 -->
    <button class="x-button" :class="{ s: s, m: m, l: l, disabled: disabled, bd: bd, o: o }" :type="type" ref="btn">
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: 'XButton',
    props: {
        s: {
            default: false,
            type: Boolean
        },
        m: {
            default: false,
            type: Boolean
        },
        l: {
            default: false,
            type: Boolean
        },
        o: {
            default: false,
            type: Boolean
        },
        disabled: {
            default: false,
            type: Boolean
        },
        bd: {
            default: false,
            type: Boolean
        },
        type: {
            default: "",
            type: String
        }
    },
    mounted() {
        if (this.type) {
            this.$refs.btn.classList.add(this.type);
        }
    }
}
</script>
<style lang="less" scoped>
@import '../assets/style/button.less';
</style>
