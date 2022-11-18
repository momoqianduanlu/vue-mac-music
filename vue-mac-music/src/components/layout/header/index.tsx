import { defineComponent } from 'vue'
import Icon from '../../base/Icon/index'
import History from '../../history/index'
import Theme from '../../base/theme/index'
import style from './index.module.scss'

console.log(style.red)

export default defineComponent({
  name: 'LayoutHeader',
  setup() {
    return () => {
      return (
        <div class={style.layoutHeader}>
          <div class={style.left}>
            <div class={style.buttons}>
              <div class={[style['mac-button'], style.red]}>
                <Icon size={9} type={'home'}></Icon>
              </div>
              <div class={[style['mac-button'], style.yellow]}>
                <Icon size={9} type={'minus'}></Icon>
              </div>
              <div class={[style['mac-button'], style.green]}>
                <Icon size={9} type={'fullscreen'}></Icon>
              </div>
            </div>
            {/* 路由历史记录 */}
            <div class={style.history}>
              <History></History>
            </div>
          </div>
          <div class={style.right}>
            <Theme></Theme>
          </div>
        </div>
      )
    }
  },
})
