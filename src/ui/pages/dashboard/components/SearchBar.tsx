import React from 'react'

export const SearchBar = React.memo(() => {
  return (
    <div style={searchBarStyle} className='d-flex px-3 py-2 rounded-8 flex-1 align-items-center'>
      <span className='flex-1'>
        Toca para buscar
      </span>
      <span className='material-symbols-outlined'>
        search
      </span>
    </div>
  )
})

const searchBarStyle: React.CSSProperties = {
  background: 'rgba(243, 244, 245, 0.3)',
}