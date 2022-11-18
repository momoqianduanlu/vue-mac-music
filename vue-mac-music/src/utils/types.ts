type variables = { [property: string]: string }

// 主题key
export type THEME_KEY = '__theme__'

// 主题类型
export enum ThemeTypes {
  'WHITE' = 'white',
  'DARK' = 'dark',
  'RED' = 'red',
}

// 主题数据
export interface ThemesObj {
  title: string
  file: variables
  style: any
}
