import { defineComponent } from 'vue'
import style from './header.module.scss'

// const useStyles = createUseStyles({
//   layoutHeader: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     height: `100px`,
//   },
//   left: {
//     backgroundColor: '#eee',
//     padding: '10px 0',
//     paddingLeft: 20,
//   },
//   right: {
//     flexGrow: 1,
//   },
// })

console.log(style)

export default defineComponent({
  name: 'LayoutHeader',
  setup() {
    return () => {
      return (
        <div class="layoutHeader">
          <div class="left">1</div>
          <div class="right">2</div>
        </div>
      )
    }
  },
})
