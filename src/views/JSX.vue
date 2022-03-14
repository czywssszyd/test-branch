<script>
import { ref, h } from 'vue'
export default {
  setup() {
    const root = ref(null)

    // return () =>
    //   h('div', {
    //     ref: root,
    //     innerHTML: '123',
    //     class: 'root'
    //   })

    // with JSX
    return () => <div ref={root}>144</div>
  }
}
</script>
