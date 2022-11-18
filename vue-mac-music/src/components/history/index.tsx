import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import Icon from '../base/Icon/index'
import style from './index.module.scss'

const History = defineComponent({
  name: 'History',
  setup() {
    const router = useRouter()
    const back = () => {
      router.back()
    }
    const forward = () => {
      router.forward()
    }
    return () => {
      return (
        <div class={style['routes-history']}>
          <Icon
            class={style.icon}
            backdrop={true}
            type={'back'}
            onIconClick={back}
          />
          <Icon backdrop={true} type={'forward'} onIconClick={forward} />
        </div>
      )
    }
  },
})

export default History
