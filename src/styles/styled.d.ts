import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primaryText: string
      secondaryText: string
    }
    shadows: {
      activeButton: '3px 2px 22px 1px rgba(0, 0, 0, 0.24)'
    }
    fonts: {
      anekMalayalam: 'Anek Malayalam'
    }
    paddings: {
      container: '15px'
      pageTop: '30px'
    }
    margins: {
      pageTop: '30px'
    }
  }
}