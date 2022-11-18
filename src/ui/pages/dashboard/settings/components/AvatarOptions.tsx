import React from 'react'
import { MyAvatar, SizedBox } from '../../../../components'

export const AvatarOptions = React.memo(() => {
  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <MyAvatar size={54} />
        <SizedBox height={8} />
        <div className='fs-12 fw-600 text-primary-blue px-2 py-1 border-primary-blue rounded-8 pointer'>
          Subir foto
        </div>
      </div>
    </>
  )
})
