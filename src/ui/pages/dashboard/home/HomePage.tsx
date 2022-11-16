import { DownloadButton, PageTitle } from "../components"

export const HomePage = () => {
  return (
    <div>
      <div className="row align-items-end">
        <div className="col-12 col-md-6">
          <PageTitle
            title="Inicio"
            description="Aquí tienes un resumen de las transacciones realizadas"
          />
        </div>
        <div className="col-12 col-md-6">
          <DownloadButton />
        </div>
      </div>
    </div>
  )
}
