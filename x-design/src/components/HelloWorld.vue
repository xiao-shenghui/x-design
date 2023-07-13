<template>
  <div class="hello">
    <h1>欢迎来到
      <span>{{ msg }}</span>
      组件库
    </h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
span {
  color: rgb(132, 194, 69);
}
</style>
