import { IconButton, SizedBox } from "../../../components"
import { DataContainer, PageTitle, SearchBar } from "../components"
import { DocumentationItem, ValueToCopy } from "./components"
import { primary } from '../../../../theme';

export const ImplementPage = () => {
  return (
    <div>
      <PageTitle
        title="Implementar"
        description="Edita las configuraciones de funcionamiento de la plataforma"
      />
      <DataContainer title="API Key">
        <SizedBox height={40} />
        <div className="row">
          <div className="col-lg-6 col-xl-4">
            <ValueToCopy
              title="App ID"
              value="4GF8ERHgt7asartaw475o6660"
            />
          </div>
          <div className="col-lg-6 col-xl-4">
            <ValueToCopy
              title="Token"
              value="4GF8ERHgt7asartaw475o6660"
            />
          </div>
        </div>
        <SizedBox height={40} />
        <DataContainer title="Implementación" removeMarginBottom>
          <SizedBox height={32} />
          <div className="d-flex align-items-center">
            <IconButton
              icon="chevron_left"
              iconColor={primary}
            />
            <SizedBox width={8} />
            <DataContainer removeMarginBottom>
              <DocumentationItem
                title="Como implementar el API Key"
                content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1800s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              />
            </DataContainer>
            <SizedBox width={8} />
            <IconButton
              icon="chevron_right"
              iconColor={primary}
            />
          </div>
        </DataContainer>
      </DataContainer>
      <DataContainer title="Documentación">
        <SizedBox height={32} />
        <div className="row align-items-center">
          <div className="col-lg-6">
            Listado de temas
          </div>
          <div className="col-lg-6">
            <SearchBar />
          </div>
        </div>
        <SizedBox height={32} />
        <DataContainer removeMarginBottom>
          <DocumentationItem
            title="Como implementar el API Key"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          />
        </DataContainer>
      </DataContainer>
    </div>
  )
}
