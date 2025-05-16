import { FC, ReactNode } from "react"
import { ThemeProvider } from "styled-components"
import { theme } from "@styles/Theme"

interface StyledThemeProviderProps {
  children: ReactNode;
}

const StyledThemeProvider: FC<StyledThemeProviderProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  )
}

export default StyledThemeProvider