import { Navigate, Route, Routes } from 'react-router-dom'
import { FinancesPage, HomePage, ImplementPage, TransactionsPage, SettingsPage } from '../ui/pages'
import { Background, NavBar } from '../ui/pages/dashboard/components'
import { DashboardRoutes } from './dashboard.routes'

export const DashboardRouter = () => {
  return (
    <>
      <Background />
      <NavBar />
      <Routes>

        <Route path={DashboardRoutes.home} element={<HomePage />} />
        <Route path={DashboardRoutes.implement} element={<ImplementPage />} />
        <Route path={DashboardRoutes.finances} element={<FinancesPage />} />
        <Route path={DashboardRoutes.transactions} element={<TransactionsPage />} />
        <Route path={DashboardRoutes.settings} element={<SettingsPage />} />

        <Route path="/" element={<Navigate to={DashboardRoutes.home} />} />
        <Route path="/*" element={<Navigate to={DashboardRoutes.home} />} />

      </Routes>
    </>
  )
}
