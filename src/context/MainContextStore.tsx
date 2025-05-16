import { createContext, FC, ReactNode, useState } from "react"

interface MainContextStoreTypes {
  theme: string
  setTheme: (theme: string) => void
}

interface MainContextStoreProviderProps {
  children: ReactNode
}

const MainContextStore = createContext<MainContextStoreTypes>({
  theme: "light",
  setTheme: () => {}
})

const MainContextStoreProvider: FC<MainContextStoreProviderProps> = ({
  children
}) => {
  const [theme, setTheme] = useState<string>("light")

  return (
    <MainContextStore.Provider value={{ theme, setTheme }}>
      {children}
    </MainContextStore.Provider>
  )
}

export { MainContextStore, MainContextStoreProvider }
