<script>
export default {
    name: 'XCol',
    props: {
        span: {
            default: 0,
            type: Number
        },
        offset: {
            default: 0,
            type: Number
        },
        tag: {
            default: 'div',
            type: String
        }
    },
    computed: {
        gutter() {
            // 获取父级的gutter,设置自身的padding
            // 返回一个对象，给style设置
            let style = {};
            if (this.$parent.gutter) {
                style.paddingLeft = this.$parent.gutter + 'px';
                style.paddingRight = style.paddingLeft
            }
            return style
        }
    },
    render(h) {
        let style = this.gutter || {};
        let classList = [];
        // 模拟el-col的遍历方法逻辑(它是用三元表达式)
        ['span', 'offset'].forEach(prop => {
            if (this[prop] || this[prop] === 0) {
                // 如果传了对应的props,有值this[prop]
                if (prop !== 'span') {
                    // offset
                    classList.push(`x-col-${prop}-${this[prop]}`);
                }
                else {
                    // span
                    console.log('传输了span');
                    classList.push(`x-col-${this[prop]}`);
                }
            }
        });
        return h(
            this.tag,
            {
                class: ['x-col', classList ? classList : ''],
                style: style
            },
            this.$slots.default
        );
    }
}
</script>
<style lang="less" scoped>
@import '../assets/style/col.less';
</style>
