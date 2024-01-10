// 1. Import `extendTheme`
import { extendTheme } from '@chakra-ui/react'

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  colors: {
    brand: {
      100: '#111827',
      sub: '#2D2D2D',
      link: '#BEE3F8',
    },
  },
})

export default theme
