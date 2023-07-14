import XButton from './button/XButton.vue'
import XIcon from './icon/XIcon.vue'
import XLink from './link/XLink.vue'

// 将每个组件放入数据里面
const components = [
    XButton,
    XIcon,
    XLink
]
// 使用install方法
const install = (Vue) => {
    // 遍历注册
    components.forEach(component => {
        Vue.component(component.name, component);
    });
}

// 换个代名词
const XDesign = {
    install
}

export default XDesign