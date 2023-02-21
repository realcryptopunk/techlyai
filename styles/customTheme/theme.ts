import { theme as proTheme } from '@chakra-ui/pro-theme'
import { extendTheme } from '@chakra-ui/react'
import { theme as baseTheme } from '@saas-ui/theme-glass'

import '@fontsource/inter/variable.css'

export const theme = extendTheme(
  {
    colors: { ...baseTheme.colors, brand: baseTheme.colors.blue },
  },
  proTheme,
)

export default theme