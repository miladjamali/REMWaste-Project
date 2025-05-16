import { Routes as AppRoutes, Route } from "react-router-dom"
import { Home } from "@/components"

const Routes = () => {
  return (
    <AppRoutes>
      <Route path="/" element={<Home />} />
    </AppRoutes>
  )
}

export default Routes
