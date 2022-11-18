import React from 'react'
import { SizedBox } from '../../../../components'

export const LegalOptions = React.memo(() => {
  return (
    <>
      <span className='fs-18 fw-700'>
        Legal
      </span>
      <SizedBox height={20} />
      <a>
        Términos y condiciones
      </a>
      <SizedBox height={16} />
      <a>
        Políticas y privacidad
      </a>
    </>
  )
})
