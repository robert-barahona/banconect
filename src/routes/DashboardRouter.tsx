import { Navigate, Route, Routes } from 'react-router-dom'
import { NAV_BAR_WIDTH } from '../constants'
import { FinancesPage, HomePage, ImplementPage, TransactionsPage, SettingsPage } from '../ui/pages'
import { Background, NavBar, TopBar } from '../ui/pages/dashboard/components'
import { DashboardRoutes } from './dashboard.routes'

export const DashboardRouter = () => {
  return (
    <>
      <Background />
      <NavBar />
      <div className="d-flex flex-column h-full" style={{ marginLeft: NAV_BAR_WIDTH }}>
        <div className="container py-4">
          <TopBar />
        </div>
        <hr className="m-0" />
        <div className="flex-1 overflow-auto pt-4">
          <div className="container">
            <Routes>

              <Route path={DashboardRoutes.home} element={<HomePage />} />
              <Route path={DashboardRoutes.implement} element={<ImplementPage />} />
              <Route path={DashboardRoutes.finances} element={<FinancesPage />} />
              <Route path={DashboardRoutes.transactions} element={<TransactionsPage />} />
              <Route path={DashboardRoutes.settings} element={<SettingsPage />} />

              <Route path="/" element={<Navigate to={DashboardRoutes.home} />} />
              <Route path="/*" element={<Navigate to={DashboardRoutes.home} />} />

            </Routes>
          </div>
        </div>
      </div>
    </>
  )
}
