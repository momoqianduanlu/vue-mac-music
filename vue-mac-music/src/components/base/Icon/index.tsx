import { defineComponent, toRefs, PropType, Ref, ref } from 'vue'
import { toRem } from '../../../utils/rem'
import style from './index.module.scss'

const ICON_CLICK = 'IconClick'

interface IconStyle {
  [fontSize: string]: string
  transform?: any
}

const Icon = defineComponent({
  name: 'Icon',
  props: {
    size: {
      type: Number as PropType<number>,
      default: 16,
    },
    type: {
      type: String as PropType<string>,
      required: true,
    },
    color: {
      type: String as PropType<string>,
      default: '',
    },
    backdrop: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },
  emits: [ICON_CLICK],
  setup(props, { emit }) {
    const { size, type, color, backdrop } = toRefs(props)
    const chromeMinSize: Ref<number> = ref(12)
    const retStyle: Ref<IconStyle> = ref({
      fontSize: '',
    })
    const onClick = (e: Event) => {
      emit(ICON_CLICK, e)
    }
    const getIconCls = (): string => {
      let cls = `icon-${type.value}`
      if (color.value) {
        cls += ` icon-color-${color.value}`
      }
      return cls
    }
    const getIconStyle = (): IconStyle => {
      // 支持小于12px
      retStyle.value.fontSize = toRem(size.value)
      if (size.value < chromeMinSize.value) {
        const ratio = size.value / chromeMinSize.value
        retStyle.value.transform = `scale(${ratio})`
      }
      return retStyle.value
    }
    return () => {
      const Icon = () => {
        return (
          <i
            onClick={onClick}
            class={['iconfont', style['icon-component'], `${getIconCls()}`]}
            style={getIconStyle()}
          />
        )
      }
      const WrapIcon = () => {
        const backDropSizeRatio = 1.56
        const backDropSize = toRem(backDropSizeRatio * size.value)
        return (
          <span
            style={{ width: backDropSize, height: backDropSize }}
            class={style.backdrop}
          >
            {Icon()}
          </span>
        )
      }
      return backdrop.value ? WrapIcon() : Icon()
    }
  },
})

export default Icon
