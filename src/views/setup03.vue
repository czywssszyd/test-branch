<template>
  <div>
    <setup-02 ref="setup02" />
    <setup-021 ref="setup021" />
  </div>
</template>

<script>
import setup02 from './setup02.vue'
import { h, ref, reactive, onMounted, onBeforeMount } from 'vue'
import setup021 from './setup021.vue'
export default {
  components: { setup02, setup021 },
  setup(props) {
    const count = ref(0)
    // 这些生命周期函数在setup中接收一个回调函数，当钩子被组件调用时会被执行
    onMounted(() => {
      console.log('组件被挂载了')
    })
    onBeforeMount(() => {
      console.log('组件被挂载前！')
    })
    return {
      count
    }
  },
  mounted() {
    console.log(this.$refs.setup02) // 可以看到里面没有setup02中的属性
    // 我们可以通过调用expose来解决这个问题，给他传递一个对象，其中定义的property将可以被外部组件实例访问
    console.log(this.$refs.setup021) // 可以调用子组件中的属性和方法了！！
    // 在setup()内部，this不是该活跃实例的引用，因为setup是在解析其他组件选项之前被调用的
    // 所以，在setup内部的this的行为与其他选项中的this完全不同。
    // 所以在混用setup和其他选项时要注意不要混淆。
  }
}
</script>

<style>
</style>