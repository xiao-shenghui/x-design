<template>
    <div class="x-radio">
        <input type="radio" v-model="labelCheck" id="radio">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'XRadio',
    props: {
        label: String,
        value: String
    },
    data() {
        return {
            labelCheck: false
        }
    },
    mounted() {
        this.labelCheck = this.value == this.label ? true : false;
    }
}
</script>
<style lang="less" scoped>
.x-radio {
    display: inline-block;
}
</style>
