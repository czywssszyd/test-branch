

<script>
// MyBook.vue

import { h, ref, reactive } from 'vue'

export default {
  // setup还可以返回一个渲染函数，该函数可以直接使用在同一作用域中声明的响应式状态
  setup() {
    const readersNumber = ref(0)
    const book = reactive({ title: '渲染函数返回的数据' })
    // 请注意这里我们需要显式使用 ref 的 value
    return () => h('div', [readersNumber.value, book.title])
    // 返回一个渲染函数将阻止我们返回其他任何东西。从内部来说这不应该成为一个问题，
    // 但当我们想要将这个组件的方法通过模板ref暴露给父组件时就不一样了。
    // 试试。在父组件中调用这个组件中的book属性？
  }
}
</script>

<style>

</style>