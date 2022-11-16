import { throttle } from 'lodash-es'

const remBase = 14

let maxFontSize: number
let minFontSize: number
let html: HTMLElement
let width: number
let size: number
let htmlFontSize: number
;(function (): void {
  const calc = function (): void {
    maxFontSize = 18
    minFontSize = 14
    html = document.getElementsByTagName('html')[0]
    width = html.clientWidth
    size = remBase * (width / 1440)
    size = Math.min(maxFontSize, size)
    size = Math.max(minFontSize, size)
    html.style.fontSize = size + 'px'
    htmlFontSize = size
  }
  calc()
  window.addEventListener('resize', throttle(calc, 500))
})()

// 根据基准字号计算
// 用于静态样式
export function toRem(px: number): string {
  return `${px / remBase}rem`
}

// 根据当前的html根字体大小计算
// 用于某些js的动态计算
export function toCurrentRem(px: number): string {
  return `${px / htmlFontSize}rem`
}
