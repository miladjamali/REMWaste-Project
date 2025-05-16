import { ReactNode, FC } from "react"
import { MainContextStoreProvider } from "@/context/MainContextStore"

interface ContextProviderProps {
  children: ReactNode
}

const ContextProvider: FC<ContextProviderProps> = ({ children }) => {
  return <MainContextStoreProvider>{children}</MainContextStoreProvider>
}

export default ContextProvider
