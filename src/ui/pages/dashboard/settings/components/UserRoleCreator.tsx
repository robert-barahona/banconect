import React from 'react'
import { primary } from '../../../../../theme'
import { IconButton, MyInput, MySelect, SizedBox } from '../../../../components'

export const UserRoleCreator = React.memo(() => {
  return (
    <div className='row align-items-end'>
      <div className="col-md-4 col-lg-3 pt-2">
        <span className='fs-12 fw-500'>
          Correo electrónico
        </span>
        <SizedBox height={8} />
        <MyInput
          icon='email'
          placeholder='Filled'
        />
      </div>
      <div className="col-md-4 col-lg-3 pt-2">
        <span className='fs-12 fw-500'>
          Rol
        </span>
        <SizedBox height={8} />
        <MySelect
          name='role'
          options={[
            { id: 1, name: 'Administrador' },
            { id: 2, name: 'Desarrollador' },
          ]}
          keyToShow='name'
          keyValue='id'
        />
      </div>
      <div className="col-md-4 col-lg-6 pt-3">
        <div className='d-flex'>
          <IconButton
            icon='add'
            bgColor={primary}
            iconColor='white'
            height={40}
            rightElement={
              <>
                <span className='text-white fs-16 fw-700 pe-2'>
                  Agregar
                </span>
              </>
            }
          />
        </div>
      </div>
    </div>
  )
})
