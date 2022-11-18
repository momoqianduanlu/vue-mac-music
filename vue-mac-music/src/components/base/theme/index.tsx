import { ElPopover } from 'element-plus'
import { defineComponent, onMounted, reactive, Ref, ref } from 'vue'
import Icon from '../../base/Icon/index'
import style from './index.module.scss'
import variables from '../../../style/variables'
import variablesWhite from '../../../style/variables-white'
import variablesRed from '../../../style/variables-red'
import { ThemeTypes, ThemesObj, THEME_KEY } from '../../../utils/types'
import storage from 'good-storage'

interface themeMap {
  [ThemeTypes.DARK]: ThemesObj
  [ThemeTypes.WHITE]: ThemesObj
  [ThemeTypes.RED]: ThemesObj
}

export default defineComponent({
  name: 'Theme',
  setup() {
    const visible: Ref<boolean> = ref(true)
    const themeKey: Ref<THEME_KEY> = ref('__theme__')
    const themeMap: themeMap = reactive({
      [ThemeTypes.DARK]: {
        title: '深色',
        file: variables,
        style: {
          backgroundColor: '#202020',
        },
      },
      [ThemeTypes.WHITE]: {
        title: '浅色',
        file: variablesWhite,
        style: {
          backgroundColor: '#F6F6F6',
          border: '1px solid #EBEAEA',
        },
      },
      [ThemeTypes.RED]: {
        title: '红色',
        file: variablesRed,
        style: {
          backgroundColor: '#D33A31',
        },
      },
    })
    const changeTheme = (key: ThemeTypes) => {
      storage.set(themeKey, key)
      const theme = themeMap[key].file
      Object.keys(theme).forEach((key) => {
        const value = theme[key]
        document.documentElement.style.setProperty(key, value)
      })
    }
    onMounted(() => {
      changeTheme(storage.get(themeKey, 'white'))
    })
    return () => {
      const slots = {
        // 默认插槽
        default: () => {
          return (
            <div class={style.themes}>
              {Object.keys(themeMap).map((key, index) => {
                const val = themeMap[key as ThemeTypes] // 类型断言，
                return (
                  <div class={style['theme-item']}>
                    <div style={val.style} class={style['theme-icon']}></div>
                    <p>{val.title}</p>
                  </div>
                )
              })}
            </div>
          )
        },
        // 内置定义插槽
        reference: () => {
          return <Icon backdrop={true} type={'skin'} />
        },
      }
      return (
        <div class="theme">
          <ElPopover
            v-model:visible={visible.value}
            trigger={'click'}
            placement={'top'}
            width={'230'}
            v-slots={slots}
          ></ElPopover>
        </div>
      )
    }
  },
})
