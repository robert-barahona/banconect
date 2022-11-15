import { MyRoutes } from './routes'
import { Navigate, Route, Routes } from 'react-router-dom'
import { DashboardPage } from '../ui/pages'

export const DashboardRouter = () => {
  return (
    <Routes>

      <Route path={MyRoutes.dashbaord} element={<DashboardPage />} />

      <Route path="/" element={<Navigate to={MyRoutes.dashbaord} />} />
      <Route path="/*" element={<Navigate to={MyRoutes.dashbaord} />} />

    </Routes>
  )
}
