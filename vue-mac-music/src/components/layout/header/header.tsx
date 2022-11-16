import { defineComponent } from 'vue'
import style from './header.module.scss'

export default defineComponent({
  name: 'LayoutHeader',
  setup() {
    return () => {
      return (
        <div class={style.layoutHeader}>
          <div class="left">1</div>
          <div class="right">2</div>
        </div>
      )
    }
  },
})
