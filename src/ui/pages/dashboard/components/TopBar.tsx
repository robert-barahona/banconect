import React from 'react'
import { IconButton, MyAvatar, SizedBox } from '../../../components'

export const TopBar = React.memo(() => {
  return (
    <div>
      <div className="row justify-content-end">
        <div className="col-12 col-md-8 col-xl-7 d-flex">
          <div style={searchBarStyle} className='d-flex px-3 py-2 rounded-8 flex-1 align-items-center'>
            <input
              className='flex-1'
              placeholder='Toca para buscar'
            />
            <span className='material-symbols-outlined'>
              search
            </span>
          </div>
          <SizedBox width={10} />
          <div className='d-flex'>
            <IconButton
              icon='notifications'
              bgColor='rgba(243, 244, 245, 0.6)'
              onClick={() => { }}
            />
            <SizedBox width={10} />
            <IconButton
              icon='expand_more'
              bgColor='rgba(243, 244, 245, 0.6)'
              leftElement={<MyAvatar size={24} />}
              onClick={() => { }}
            />
          </div>
        </div>
      </div>
    </div>
  )
})

const searchBarStyle: React.CSSProperties = {
  background: 'rgba(243, 244, 245, 0.3)',
}
