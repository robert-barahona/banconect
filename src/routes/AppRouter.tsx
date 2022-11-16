import { MyRoutes, DashboardRouter } from "."
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "../ui/pages"

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path={MyRoutes.login} element={<LoginPage />} />

        <Route path="/" element={<Navigate to={MyRoutes.login} />} />
        <Route path="/*" element={<DashboardRouter />} />

      </Routes>
    </BrowserRouter>
  )
}
