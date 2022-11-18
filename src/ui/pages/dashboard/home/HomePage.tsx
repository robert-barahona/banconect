import { PageTitle } from "../components"

export const HomePage = () => {
  return (
    <div>
      <PageTitle
        title="Inicio"
        description="Aquí tienes un resumen de las transacciones realizadas"
        showDownloadButton
      />
    </div>
  )
}
