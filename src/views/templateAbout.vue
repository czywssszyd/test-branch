<template>
  <div ref="root">这是根元素</div>
</template>

<script>
import {ref, onMounted} from 'vue'
export default {
  setup() {
    const root = ref(null) // ref 对基础数据类型的代理 String, number, boolean, undefined, null, symbol
    onMounted(() => {
      // DOM元素将在初始渲染后分配给ref
      console.log(root)
    })
    return {
      root
    }
    /**
     * 这里我们在渲染上下文中暴露了root，并通过ref="root",将其绑定到div作为其ref
     * 在虚拟DOM补丁算法中，如果VNode的ref键对应于渲染上下文中的ref，则VNode的相应元素或组件实例将被分配给该
     * ref的值，这是在虚拟DOM挂载/ 打补丁过程中执行的，因此模板引用只会在初始渲染之后获得赋值。(意思就是没被挂载
     * 到页面上时是获取不到模板的ref值的但是其他非模板引用的值的ref是可以获取到的)
     *
     * 作为模板使用ref的行为与任何其他ref一样，它们是响应式的，可以传递到(或从中返回)复合函数中
     */
  }
}
</script>

<style>

</style>