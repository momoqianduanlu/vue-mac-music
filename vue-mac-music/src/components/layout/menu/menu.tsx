import { defineComponent } from 'vue'
import style from './menu.module.scss'

console.log(style)

const Menu = defineComponent({
  name: 'LayoutMenu',
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

export default Menu
