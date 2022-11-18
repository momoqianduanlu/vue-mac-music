import { defineComponent } from 'vue'
import { ElContainer, ElHeader, ElAside, ElMain } from 'element-plus'
import Header from './components/layout/header/index'
import Menu from './components/layout/menu/index'

export default defineComponent({
  name: 'App',
  setup(props, ctx) {
    return () => {
      return (
        <ElContainer>
          <ElHeader>{ctx.slots ? <Header></Header> : null}</ElHeader>
          <ElContainer>
            <ElAside width="300">{ctx.slots ? <Menu></Menu> : null}</ElAside>
            <ElMain>Main</ElMain>
          </ElContainer>
        </ElContainer>
      )
    }
  },
})
