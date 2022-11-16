import { defineComponent } from 'vue'
import { ElContainer, ElHeader, ElAside, ElMain } from 'element-plus'
import Header from '@/component/layout/header/header'
import Menu from '@/component/layout/menu/menu'

const Home = defineComponent({
  name: 'Home',
  setup(props, ctx) {
    return () => {
      return (
        <div class="home-container">
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

export default Home
