<template>
    <div class="userview">
        <div class="left-user">
            <ul>
                <li>
                    <a>开发指南</a>
                    <a href="#coding-instal">安装</a>
                </li>
                <li>
                    <a>组件</a>
                    <a href="#coding-button3">按钮3</a>
                </li>
                <li>
                    <a>组件</a>
                    <a href="#coding-button3">按钮3</a>
                </li>
                <li>
                    <a>组件</a>
                    <a href="#coding-button3">按钮3</a>
                </li>
                <li>
                    <a>组件</a>
                    <a href="#coding-button3">按钮3</a>
                </li>
                <li>
                    <a>组件</a>
                    <a href="#coding-button3">按钮3</a>
                </li>
                <li>
                    <a>组件</a>
                    <a href="#coding-button3">按钮3</a>
                </li>
                <li>
                    <a>开发指南</a>
                    <a href="#coding-instal">安装</a>
                </li>
                <li>
                    <a>组件</a>
                    <a href="#coding-button3">按钮3</a>
                </li>
                <li>
                    <a>组件</a>
                    <a href="#coding-button3">按钮3</a>
                </li>
                <li>
                    <a>组件</a>
                    <a href="#coding-button3">按钮3</a>
                </li>
                <li>
                    <a>组件</a>
                    <a href="#coding-button3">按钮3</a>
                </li>
                <li>
                    <a>组件</a>
                    <a href="#coding-button3">按钮3</a>
                </li>
                <li>
                    <a>组件</a>
                    <a href="#coding-button3">按钮3</a>
                </li>
            </ul>
        </div>
        <div class="right-user">
            <h1>使用文档初始化</h1>
            <div class="installBox">
                <h3 id="coding-instal">安装</h3>
                <h4>快速上手</h4>
                <h5>引入 Xdesign</h5>
                <span>在 main.js 中写入以下内容：</span>
                <pre>
import '@/assets/aliIcon/iconfont'
import XDesign from './xdesign'
Vue.use(XDesign)
                </pre>
                <h3 id="coding-button">按钮</h3>
                <h4>快速上手</h4>
                <h5>引入 Xdesign</h5>
                <span>在 main.js 中写入以下内容：</span>
                <pre>
import '@/assets/aliIcon/iconfont'
import XDesign from './xdesign'
Vue.use(XDesign)
                </pre>
                <h3 id="coding-button2">按钮2</h3>
                <h4>快速上手</h4>
                <h5>引入 Xdesign</h5>
                <span>在 main.js 中写入以下内容：</span>
                <pre>
import '@/assets/aliIcon/iconfont'
import XDesign from './xdesign'
Vue.use(XDesign)
                </pre>
                <h3 id="coding-button3">按钮3</h3>
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
    </div>
</template>
<script>
export default {
    name: 'UserView'
}
</script>
<style lang="less" scoped>
.userview {
    overflow: hidden;

    .left-user {
        width: 18%;
        height: 100%;
        border-right: 1px solid #eee;
        text-align: left;
        padding: 10px;
        overflow-y: scroll;
        scroll-behavior: smooth;
        position: fixed;

        ul {
            list-style: none;

            li {
                a {
                    display: block;
                    margin: 10px 0;
                    color: #888;
                    cursor: pointer;
                    text-decoration: none;
                }

                a:first-child {
                    font-weight: bold;
                    color: #333;
                }
            }
        }
    }


    .right-user {
        width: 76.5%;
        border: 1px solid #eee;
        text-align: left;
        margin: 10px auto;
        margin-left: 20%;
        padding: 20px;
    }
}

pre {
    background-color: #333;
    border-radius: 10px;
    color: #fff;
    padding: 10px;
    width: 300px;
}
</style>
