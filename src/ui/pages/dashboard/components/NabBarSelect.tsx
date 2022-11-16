import React from 'react'
import { IconButton, SizedBox } from '../../../components'

export const NabBarSelect = React.memo(() => {
  return (
    <div className='bg-white d-flex align-items-center p-3 rounded-8'>
      <div className='d-flex flex-1 flex-column'>
        <span className='fs-12 fw-300'>
          Seleccionar aplicación
        </span>
        <span className='fw-bold fs-13'>
          Senseg
        </span>
      </div>
      <SizedBox size={25} />
      <IconButton
        icon='expand_more'
        onClick={() => { }}
      />
    </div>
  )
})
