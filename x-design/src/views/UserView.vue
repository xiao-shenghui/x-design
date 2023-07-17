<template>
    <div class="userview">
        <h1>使用文档初始化</h1>
        <div class="installBox">
            <h3>安装</h3>
            <h4>快速上手</h4>
            <h5>引入 Xdesign</h5>
            <span>在 main.js 中写入以下内容：</span>
            <pre>
import '@/assets/aliIcon/iconfont'
import XDesign from './xdesign'
Vue.use(XDesign)
            </pre>
        </div>
    </div>
</template>
<script>
export default {
    name: 'UserView'
}
</script>
<style lang="less" scoped>
.userview {
    padding: 0 30px;
    text-align: left;
}

pre {
    background-color: #333;
    border-radius: 10px;
    color: #fff;
    padding: 10px;
    width: 300px;
}
</style>
