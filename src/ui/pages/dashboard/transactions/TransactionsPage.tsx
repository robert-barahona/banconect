import { SizedBox } from '../../../components';
import { DataContainer, PageTitle, TransactionsList } from '../components';
import { Filters } from './components';

export const TransactionsPage = () => {
  return (
    <div>
      <PageTitle
        title="Transacciones"
        description="Consulta y  gestiona reportes de los montos o balances pendientes con Banconect"
        showDownloadButton
      />
      <Filters />
      <SizedBox height={24} />
      <DataContainer title="Transacciones recientes" >
        <SizedBox height={8} />
        <TransactionsList />
      </DataContainer>
    </div>
  )
}
