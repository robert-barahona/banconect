import React from 'react'
import { Info } from '.'
import { SizedBox } from '../../../../components'

export const PreferencesData = React.memo(() => {
  return (
    <>
      <span className='fs-18 fw-700'>
        Preferencias
      </span>
      <SizedBox height={20} />
      <div className="px-2">
        <Info title='Moneda por defecto' info='Dólares americanos' />
      </div>
    </>
  )
})
