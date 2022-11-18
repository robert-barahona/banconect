import React from 'react'
import { SizedBox } from '../../../../components'

export const MoreOptions = React.memo(() => {
  return (
    <>
      <span className='fs-18 fw-700'>
        Más opciones
      </span>
      <SizedBox height={20} />
      <a>
        Cerrar sesión
      </a>
      <SizedBox height={16} />
      <a>
        Autenticación en dos pasos
      </a>
      <SizedBox height={16} />
      <a>
        Cambiar contraseña
      </a>
      <SizedBox height={16} />
      <a className='text-red'>
        Eliminar cuenta
      </a>
    </>
  )
})
