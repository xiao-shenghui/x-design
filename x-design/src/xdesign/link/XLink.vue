<template>
    <a class="x-link" :href="href" :type="type" ref="link" :class="{ disabled: disabled, nounderline: nounderline }"
        :icon="icon" :target="target">
        <x-icon v-if="icon.length > 6" :icon="icon" />
        <slot></slot>
    </a>
</template>
<script>
export default {
    name: 'XLink',
    props: {
        type: {
            default: '',
            type: String
        },
        disabled: {
            default: false,
            type: Boolean
        },
        href: {
            default: "javascript:void(0)",
            type: String
        },
        target: {
            default: "_self",
            type: String
        },
        nounderline: {
            default: false,
            type: Boolean
        },
        icon: {
            default: "",
            type: String
        }
    },
    mounted() {
        if (this.type) {
            this.$refs.link.classList.add(this.type)
        }
    }
}
</script>
<style lang="less" scoped>
@import '../assets/style/link.less';
</style>
