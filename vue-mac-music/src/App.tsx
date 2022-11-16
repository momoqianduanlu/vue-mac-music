import { defineComponent } from 'vue'
import { ElContainer, ElHeader, ElAside, ElMain } from 'element-plus'
import Header from './components/layout/header/header'
import Menu from './components/layout/menu/menu'

export default defineComponent({
  name: 'App',
  setup(props, ctx) {
    return () => {
      return (
        <div class="container">
          <ElContainer>
            <ElHeader>{ctx.slots ? <Header></Header> : null}</ElHeader>
            <ElContainer>
              <ElAside width="300px">
                {ctx.slots ? <Menu></Menu> : null}
              </ElAside>
              <ElMain>Main</ElMain>
            </ElContainer>
          </ElContainer>
        </div>
      )
    }
  },
})
