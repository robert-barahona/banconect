import { DashboardRoutes } from "../routes/dashboard.routes";

export const navbarItems = [
  {
    icon: 'home',
    name: 'Inicio',
    route: DashboardRoutes.home,
  },
  {
    icon: 'account_balance_wallet',
    name: 'Finanzas',
    route: DashboardRoutes.finances,
  },
  {
    icon: 'widgets',
    name: 'Implementar',
    route: DashboardRoutes.implement,
  },
  {
    icon: 'currency_exchange',
    name: 'Transacciones',
    route: DashboardRoutes.transactions,
  }
]