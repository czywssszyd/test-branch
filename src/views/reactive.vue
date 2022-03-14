<template>
  <div>
    <div>{{state.count}}: {{a.age}}</div>
    <button @click="a.age.value++">增加age</button>
    <button @click="state.count++">增加count</button>
  </div>
</template>

<script>
import {reactive, ref} from 'vue'
/**
 * reactive 相当于vue2.x中的Vue.observable()API,
 * 该api返回一个响应式的对象状态，该响应式转为是"深度转换" ---它会影响传递对象的所有嵌套property
 * Vue中响应式状态的基本用例是我们可以在渲染期间使用它，因为依赖跟踪的关系，当响应式状态改变时，
 * 视图会自动更新。
 *
 * 这就是Vue响应式系统的本质，当组件中的data() 返回一个对象时，它在内部交由reactive()使其成为响应式对象。
 * 模板会被编译成能够使用这些响应式property的玄滩函数
 *
 *
 * 创建独立的响应式值作为refs:
 *   想象一下，我们有一个独立的原始值，我们想让它变成响应式的。当然我们可以创建一个拥有相同字符串property的对象，
 * 并将其传递给reactive。 Vue为我们提供了一个可以做相同事情的方法--ref
 */
export default {
  setup() {
    // 响应式状态
    const state = reactive({
      count: 0
    })
    const age = ref(18)
    // ref会返回一个可变的响应式对象，该对象作为一个响应式的引用， 维护着它内部的值
    // 这就ref名称的来源，该对象只包含一个名为value的property
    console.log('age', age)
    /**
     * Ref解包：
     * 当ref作为渲染上下文(从setup中返回的对象)上的property返回并可以在模板中被访问时，它将自动浅层次解包内部的值
     * 只有返回嵌套的ref时，需要在模板中添加.value
     * ref解包仅发生在被响应式Object嵌套的时候，当从Array或原生结合类型如Map访问ref时，不会进行解包
     */
    return {
      state,
      a: {
        age
      }
    }
  }
}
</script>

<style>

</style>