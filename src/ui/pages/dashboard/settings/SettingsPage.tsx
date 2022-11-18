import { SizedBox } from '../../../components'
import { DataContainer, PageTitle } from '../components'
import { AvatarOptions, EditProfileButton, HelpOptions, LegalOptions, MoreOptions, PersonalData, PreferencesData } from './components'

export const SettingsPage = () => {
  return (
    <div>
      <PageTitle
        title="Configuraciones"
        description="Edita las configuraciones de funcionamiento de la plataforma"
      />
      <DataContainer
        title='Editar información del perfil'
        rightElement={<EditProfileButton />}
      >
        <SizedBox height={32} />
        <div className="row">
          <div className="d-md-flex col-lg-2 pb-3">
            <AvatarOptions />
          </div>
          <div className="col-md-6 col-lg-5 pb-3">
            <div className="d-flex flex-column">
              <PersonalData />
              <SizedBox height={20} />
              <PreferencesData />
            </div>
          </div>
          <div className="col-md-6 col-lg-5 pb-3">
            <div className="d-flex flex-column">
              <HelpOptions />
              <SizedBox height={20} />
              <LegalOptions />
              <SizedBox height={20} />
              <MoreOptions />
            </div>
          </div>
        </div>
      </DataContainer>
    </div>
  )
}
