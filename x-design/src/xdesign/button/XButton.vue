<template>
    <!-- :class="{s:s}"记得写成对象的形式 -->
    <button class="x-button" :class="{ s: s, m: m, l: l, disabled: disabled, bd: bd, o: o }" :type="type" ref="btn">
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: 'xbutton',
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
.x-button {
    padding: 10px 16px;
    border-radius: 10px;
    font-size: 16px;
    background-color: rgb(132, 194, 69);
    color: #fff;
    border: none;
    cursor: pointer;
}

.s {
    padding: 5px;
    border-radius: 10px;
    font-size: 12px;
}

.m {
    padding: 10px;
    border-radius: 10px;
    font-size: 16px;
}

.l {
    padding: 20px;
    border-radius: 10px;
    font-size: 30px;
}

.o {
    padding: 10px;
    border-radius: 50%;
}

.disabled {
    opacity: 0.3;
    cursor: not-allowed;
}

.bd {
    background-color: transparent;
    border: 1px solid rgb(132, 194, 69);
    color: rgb(132, 194, 69);
}

.primary {
    // 主要颜色
    background-color: rgb(132, 194, 69);
}

.success {
    // 成功的颜色
    background-color: rgb(28, 240, 255);
}

.info {
    // 信息的颜色
    background-color: rgb(95, 95, 95);
}

.warn {
    // 警告的颜色
    background-color: rgb(255, 238, 0);
}

.danger {
    // 危险的颜色
    background-color: rgb(255, 0, 0);
}
</style>
