import { DownloadButton, PageTitle } from '../components';

export const TransactionsPage = () => {
  return (
    <div>
      <div className="row align-items-end">
        <div className="col-12 col-md-6">
          <PageTitle
            title="Transacciones"
            description="Consulta y  gestiona reportes de los montos o balances pendientes con Banconect"
          />
        </div>
        <div className="col-12 col-md-6">
          <DownloadButton />
        </div>
      </div>
    </div>
  )
}
