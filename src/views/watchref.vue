<template>
  <div ref="root">This is a root element</div>
</template>

<script>
  import { ref, watchEffect } from 'vue'

  export default {
    setup() {
      const root = ref(null)

      watchEffect(() => {
        // 这个副作用在 DOM 更新之前运行，因此，模板引用还没有持有对元素的引用。
        console.log(root.value) // => null
        // 因此，使用模板引用的侦听器应该用flush: 'post'选项来定义。这将在DOM更新后运行副作用，确保
        // 模板引用与DOM保持同步，并引用正确的元素
      }, {
        flush: 'post'
      })

      return {
        root
      }
    }
  }
</script>