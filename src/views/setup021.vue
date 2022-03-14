

<script>
import { h, ref } from 'vue'
export default {
  setup(props, { expose }) {
    const count = ref(0)
    const increment = () => ++count.value

    expose({
      increment,
      count
    })
    // 这个 increment 方法现在将可以通过父组件的模板 ref 访问。
    return () => h('div', count.value)
  }
}
</script>

<style>

</style>