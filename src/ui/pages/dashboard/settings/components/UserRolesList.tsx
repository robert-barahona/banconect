import React from 'react'
import { RoleItem } from '.'

export const UserRolesList = React.memo(() => {
  return (
    <div className='row'>
      <RoleItem email='matutezambrano@gmail.com' role='Administrador' />
    </div>
  )
})
