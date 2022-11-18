import React from 'react'
import { SizedBox } from '../../../components'

export const SearchBar = React.memo(() => {
  return (
    <div className='d-flex align-items-center border-grey rounded-8 px-2 py-1 flex-1' style={{ height: 40 }}>
      <span className='material-symbols-outlined'>
        search
      </span>
      <SizedBox width={10} />
      <input
        className='flex-1'
        placeholder='Buscar en el listado'
      />
    </div>
  )
})

