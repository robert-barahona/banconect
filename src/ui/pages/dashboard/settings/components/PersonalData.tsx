import React from 'react'
import { Info } from '.'
import { SizedBox } from '../../../../components'

export const PersonalData = React.memo(() => {
  return (
    <>
      <span className='fs-18 fw-700'>
        Datos informativos
      </span>
      <SizedBox height={20} />
      <div className="px-2">
        <Info title='Nombre completo' info='Matute Zambrano' />
        <SizedBox height={16} />
        <Info title='Rol' info='Administrador' />
        <SizedBox height={16} />
        <Info title='Email' info='matutezambrano@gmail.com' />
        <SizedBox height={16} />
        <Info title='Phone' info='+5447864983334' />
        <SizedBox height={16} />
        <Info title='DNI' info='7864983334' />
      </div>
    </>
  )
})
