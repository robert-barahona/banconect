import React from 'react'
import { Info } from '.'
import { primary, red } from '../../../../../theme';
import { IconButton, SizedBox } from '../../../../components';

interface Props {
  email: string;
  role: string;
}

export const RoleItem = React.memo(({ email, role }: Props) => {
  return (
    <>
      <div className="col-md-4 col-lg-3 pt-2">
        <Info title='Correo electrónico' info={email} />
      </div>
      <div className="col-md-4 col-lg-3 pt-2">
        <Info title='Rol' info={role} />
      </div>
      <div className="col-md-4 col-lg-6 pt-2">
        <div className="d-flex align-items-center">
          <IconButton
            icon='delete'
            iconColor={red}
            bgColor='white'
            height={40}
          />
          <SizedBox width={16} />
          <IconButton
            icon='edit'
            iconColor={primary}
            bgColor='white'
            height={40}
            rightElement={
              <>
                <span className='text-primary-blue fs-16 fw-700 pe-2'>
                  Editar
                </span>
              </>
            }
          />
        </div>
      </div>
    </>
  )
})
