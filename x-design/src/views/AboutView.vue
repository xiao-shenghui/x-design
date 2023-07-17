<template>
  <div class="about">
    <h1>这是用来测试组件的测试页面</h1>
    <!-- 按钮集合 -->
    <section class="btn">
      <h4>按钮集合:</h4>
      <x-button :s=sa>小按钮</x-button>
      <x-button :m=sa>中按钮</x-button>
      <x-button :l=sa>大按钮</x-button>
      <x-button :disabled=sa>禁用按钮</x-button>
      <x-button :bd=sa>边框按钮</x-button>
      <x-button :type=primary>主要按钮</x-button>
      <x-button :type=success>成功按钮</x-button>
      <x-button :type=warn>警告按钮</x-button>
      <x-button :type=danger>危险按钮</x-button>
      <x-button :o=sa>圆</x-button>
      <x-button><x-icon icon="x-icon-shijian"></x-icon></x-button>
    </section>
    <!-- 图标集合 -->
    <section class="iconBox">
      <h4>图标集合：</h4>
      <ul>
        <li>
          <x-icon icon="x-icon-shijian" />
          x-icon-shijian
        </li>
        <li>
          <x-icon icon="x-icon-laba" />
          x-icon-laba
        </li>
        <li>
          <x-icon icon="x-icon-taiji" />
          x-icon-taiji
        </li>
        <li>
          <x-icon icon="x-icon-shubiao" />
          x-icon-shubiao
        </li>
        <li>
          <x-icon icon="x-icon-caidan" />
          x-icon-caidan
        </li>
        <li>
          <x-icon icon="x-icon-dingbu" />
          x-icon-dingbu
        </li>
        <li>
          <x-icon icon="x-icon-shouji" />
          x-icon-shouji
        </li>
        <li>
          <x-icon icon="x-icon-book-full" />
          x-icon-book-full
        </li>
        <li>
          <x-icon icon="x-icon-home" />
          x-icon-home
        </li>
        <li>
          <x-icon icon="x-icon-xinxi" />
          x-icon-xinxi
        </li>
        <li>
          <x-icon icon="x-icon-win8" />
          x-icon-win8
        </li>
        <li>
          <x-icon icon="x-icon-xiangxia" />
          x-icon-xiangxia
        </li>
        <li>
          <x-icon icon="x-icon-xiangyou1" />
          x-icon-xiangyou1
        </li>
        <li>
          <x-icon icon="x-icon-sousuo" />
          x-x-icon-sousuo
        </li>
        <li>
          <x-icon icon="x-icon-sousuo1" />
          x-icon-sousuo1
        </li>
        <li>
          <x-icon icon="x-icon-zhuti_tiaosepan" />
          x-icon-zhuti_tiaosepan
        </li>
      </ul>
    </section>
    <!-- 文字链接集合 -->
    <section>
      <h4>文字链接集合：</h4>
      <x-link href="https://gitee.com/" target="_blank">默认链接</x-link>
      <x-link type="primary">主要链接</x-link>
      <x-link type="success">成功链接</x-link>
      <x-link type="warn">警告链接</x-link>
      <x-link type="danger">危险链接</x-link>
      <x-link type="info">信息链接</x-link>
      <br>
      <h4>禁用链接集合：</h4>
      <x-link disabled>默认链接</x-link>
      <x-link type="primary" disabled>主要链接</x-link>
      <x-link type="success" disabled>成功链接</x-link>
      <x-link type="warn" disabled>警告链接</x-link>
      <x-link type="danger" disabled>危险链接</x-link>
      <x-link type="info" disabled>信息链接</x-link>
      <h4>有/无下划线链接：</h4>
      <x-link nounderline>无下划线链接</x-link>
      <x-link>有下划线链接</x-link>
      <h4>带图标的文字链接：</h4>
      <x-link icon="x-icon-sousuo">搜索</x-link>
      <x-link>首页<x-icon icon="x-icon-home" /></x-link>
    </section>
  </div>
</template>
<script>
// Vue.use了，不再需要引入
// import XButton from '@/xdesign/button/XButton.vue'
// import XIcon from '@/xdesign/icon/XIcon.vue'

export default {
  name: 'AboutView',
  data() {
    return {
      sa: true,
      primary: "primary",
      success: "success",
      warn: "warn",
      danger: "danger",
    }
  }
  // components: {
  //   XButton,
  //   XIcon
  // }
}
</script>

<style lang="less" scoped>
.about {
  text-align: left;
  padding-left: 20px;
  padding-top: 20px;
}



section {
  border: 1px solid rgb(251, 114, 153, 0.452);
  padding: 10px;
  border-radius: 10px;
  margin: 10px 0;
  overflow: hidden;

  h4 {
    margin: 10px;
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    width: 90%;
    margin: 0 auto;
    flex-wrap: wrap;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 10px 30px;
      color: rgb(78, 78, 78);

      &:nth-child(1+8n) {
        margin-left: 0;
      }

      .x-icon {
        margin-bottom: 10px;
        font-size: 30px;
      }
    }
  }

  .x-link {
    margin-left: 20px;
  }

  .x-button {
    margin: 0 10px;

    .x-icon:hover {
      color: #fff;
    }
  }
}
</style>
