import React from 'react'
import { RoleItem } from '.'

export const UserRolesList = React.memo(() => {
  return (
    <div className='row align-items-end'>
      <RoleItem email='matutezambrano@gmail.com' role='Administrador' />
    </div>
  )
})
