<template>
    <i class="x-icon" :icon=icon ref="i"></i>
</template>
<script>
import '../css/aliIcon/iconfont.css'
export default {
    name: 'XIcon',
    props: {
        icon: {
            default: "",
            type: String
        }
    },
    mounted() {
        // 根据传入的内容,添加对应的类名,渲染标签
        // 如何传入 x-icon-win8 //渲染为icon-win8
        // 拿掉前2位
        // console.log(this.icon);
        if (this.icon) {
            this.$refs.i.classList.add('iconfont', this.icon.slice(2));
        }
    }
}
</script>
<style lang="less" scoped>
.x-icon {
    color: rgb(78, 78, 78);
    cursor: pointer;
}

.x-icon:hover {
    color: rgb(251, 114, 153);
}
</style>
