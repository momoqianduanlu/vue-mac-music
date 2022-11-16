import { defineComponent } from 'vue'
import { ElContainer, ElHeader, ElAside, ElMain } from 'element-plus'
import Header from '../../components/layout/header/header'
import Menu from '../../components/layout/menu/menu'

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
