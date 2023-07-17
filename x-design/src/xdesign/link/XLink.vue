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
.x-link {
    color: #333;
    text-decoration: none;
    transition: 0.3s;

    &:hover {
        opacity: 0.8;
        color: rgb(251, 114, 153);
        text-decoration: underline;
    }
}



.primary {
    // 主要颜色
    color: rgb(251, 114, 153);

    &:hover {
        color: rgb(251, 114, 153);
    }
}

.success {
    // 成功的颜色
    color: rgb(28, 240, 255);

    &:hover {
        color: rgb(28, 240, 255);
    }
}

.info {
    // 信息的颜色
    color: rgb(95, 95, 95);

    &:hover {
        color: rgb(95, 95, 95);
    }
}

.warn {
    // 警告的颜色
    color: rgb(255, 238, 0);

    &:hover {
        color: rgb(255, 238, 0);
    }
}

.danger {
    // 危险的颜色
    color: rgb(255, 0, 0);

    &:hover {
        color: rgb(255, 0, 0);
    }
}

.disabled {
    opacity: 0.3;
    cursor: not-allowed;

    &:hover {
        opacity: 0.3;
        text-decoration: none;
    }
}

.nounderline:hover {
    text-decoration: none;
}
</style>
