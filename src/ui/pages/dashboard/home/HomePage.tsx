import { IconButton, SizedBox } from "../../../components"
import { DataContainer, PageTitle } from "../components"
import graphic from "../../../../assets/images/graphic1.svg";

export const HomePage = () => {
  return (
    <div>
      <PageTitle
        title="Inicio"
        description="Aquí tienes un resumen de las transacciones realizadas"
        showDownloadButton
      />
      <DataContainer title="Transacciones procesadas">
        <SizedBox height={8} />
        <div className="d-flex fw-700 align-items-center">
          <span className="flex-1">
            Monto total:
            <span className="text-green">
              {` $29.950,15`}
            </span>
          </span>
          <IconButton
            leftElement={<span>1 mes</span>}
            icon='expand_more'
            bgColor="transparent"
          />
        </div>
        <SizedBox height={16} />
        <div className="bg-white rounded-8">
          <img src={graphic} alt="gráfico 1" className="w-100" />
        </div>

      </DataContainer>
      <DataContainer title="Transacciones recientes" >

      </DataContainer>
    </div>
  )
}
