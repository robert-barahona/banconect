import React from 'react'
import { SizedBox } from '../../../../components'

export const HelpOptions = React.memo(() => {
  return (
    <>
      <span className='fs-18 fw-700'>
        Ayuda
      </span>
      <SizedBox height={20} />
      <a>
        Soporte técino
      </a>
      <SizedBox height={16} />
      <a>
        Preguntas frecuentes
      </a>
      <SizedBox height={16} />
      <a>
        Ayuda sobre la plataforma
      </a>
    </>
  )
})
