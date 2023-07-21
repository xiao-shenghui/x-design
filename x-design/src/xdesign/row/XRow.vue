<script>
export default {
    name: 'XRow',
    props: {
        tag: {
            default: "div",
            type: String
        },
        gutter: {
            default: 0,
            type: Number
        },
        type: {
            default: "",
            type: String
        },
        justify: {
            default: "",
            type: String
        },
        aligns: {
            default: "",
            type: String
        },
        direction: {
            default: "",
            type: String
        }
    },
    computed: {
        style() {
            // 它自身的margin样式
            let mLR = {};
            if (this.gutter) {
                mLR.marginLeft = this.gutter / 2 + 'px';
                mLR.marginRight = mLR.marginLeft;
            }
            return mLR;
        }
    },
    render: function (h) {
        return h(this.tag, {
            class: ['x-row',
                this.type === "flex" ? 'x-row-flex' : '',
                this.justify ? `x-row-justify-${this.justify}` : '', this.aligns ? `x-row-align-${this.aligns}` : '', this.direction === "column" ? `x-row-flex-column` : ''],
            style: this.style
        }, this.$slots.default);
    }
}
</script>
<style lang="less" scoped>
@import '../assets/style/row.less';
</style>
