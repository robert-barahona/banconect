import { green1, primary, red } from "../../../../theme"
import { SizedBox } from "../../../components"
import { DataContainer, EarningsPayList, PageTitle } from "../components"
import { AmountValue } from "./components"
import graphic2 from "../../../../assets/images/graphic2.svg";

export const FinancesPage = () => {
  return (
    <div>
      <PageTitle
        title="Finanzas"
        description="Consulta y  gestiona reportes de los montos o balances pendientes con Banconect"
        showDownloadButton
      />
      <DataContainer title="Resumen de transacciones">
        <SizedBox height={32} />
        <div className="row align-items-center">
          <div className="col-lg-4">
            <AmountValue
              color={primary}
              title='Total monto de transferencias'
              amount={2045.30} />
          </div>
          <div className="col-lg-4">
            <AmountValue
              color={red}
              title='Comisión (1.9%)'
              amount={38.86} />
          </div>
          <div className="col-lg-4">
            <AmountValue
              color={green1}
              title='Ganancia'
              amount={2006.44} />
          </div>
        </div>
        <SizedBox height={32} />
        <div className="bg-white rounded-8">
          <img src={graphic2} alt="graphic2" className="w-100" />
        </div>
        <SizedBox height={16} />
        <DataContainer title="Pago de ganancias" removeMarginBottom>
          <EarningsPayList />
        </DataContainer>
      </DataContainer>
    </div>
  )
}
