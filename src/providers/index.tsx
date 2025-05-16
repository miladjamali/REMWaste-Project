import { FC, ReactNode } from "react"
import StyledThemeProvider from "./StyledThemeProvider"
import ContextProvider from "./ContextProvider"
import ReduxProvider from "./ReduxProvider"

interface ProvidersProps {
  children: ReactNode
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <ContextProvider>
      <ReduxProvider>
        <StyledThemeProvider>{children}</StyledThemeProvider>
      </ReduxProvider>
    </ContextProvider>
  )
}

export default Providers
