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
                    classList.push(`x-col-${this[prop]}`);
                }
            }
        });
        return h(
            this.tag,
            {
                class: ['x-col', { classList: classList }],
                style: style
            },
            this.$slots.default
        );
    }
}
</script>
<style lang="less" scoped>
[class*=x-col-] {
    float: left;
    box-sizing: border-box;
    // 上来直接给所有要设置偏移或者span的，设置为左浮动
    --w: 8.33333%;
    // el-col是平分为24份，我们平分为12份吧。
}

.x-col-0 {
    width: calc(0 * var(--w));
}

.x-col-1 {
    width: calc(1 * var(--w));
}

.x-col-2 {
    width: calc(2 * var(--w));
}

.x-col-3 {
    width: calc(3 * var(--w));
}

.x-col-4 {
    width: calc(4 * var(--w));
}

.x-col-5 {
    width: calc(5 * var(--w));
}

.x-col-6 {
    width: calc(6 * var(--w));
}

.x-col-7 {
    width: calc(7 * var(--w));
}

.x-col-8 {
    width: calc(8 * var(--w));
}

.x-col-9 {
    width: calc(9 * var(--w));
}

.x-col-10 {
    width: calc(10 * var(--w));
}

.x-col-11 {
    width: calc(11 * var(--w));
}

.x-col-12 {
    width: calc(12 * var(--w));
}

.x-col-offset-0 {
    left: calc(0 * var(--w));
}

.x-col-offset-1 {
    left: calc(1 * var(--w));
}

.x-col-offset-2 {
    left: calc(2 * var(--w));
}

.x-col-offset-3 {
    left: calc(3 * var(--w));
}

.x-col-offset-4 {
    left: calc(4 * var(--w));
}

.x-col-offset-5 {
    left: calc(5 * var(--w));
}

.x-col-offset-6 {
    left: calc(6 * var(--w));
}

.x-col-offset-7 {
    left: calc(7 * var(--w));
}

.x-col-offset-8 {
    left: calc(8 * var(--w));
}

.x-col-offset-9 {
    left: calc(9 * var(--w));
}

.x-col-offset-10 {
    left: calc(10 * var(--w));
}

.x-col-offset-11 {
    left: calc(11 * var(--w));
}

.x-col-offset-12 {
    left: calc(12 * var(--w));
}
</style>
